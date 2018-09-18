const db = require('./../config/db.config');
const User = db.userDb;
const Op = db.Op;

const bcrypt = require('bcrypt');
const validates = require('./../libraries/validates');

const ApiResponse = require('./../libraries/response');
const consts = require('./../libraries/consts');

/*
	login { Function } 
	@param { Object } req
	@param { Object } res

	@return { Object }
*/
exports.login = async(req,res) => {

}

/*
	register { Function } 
	@param { Object } req
	@param { Object } res

	@return { Object }
*/

exports.register = async (req,res) => {
	let params = req.body;
	if(!params.username || !params.password || !params.email) {
		return res.send(ApiResponse.error(400, consts.reason.paramsNotNull, consts.message.paramsNotNull));
	}

	if(!validates.validateEmail(params.email)) {
		res.send(ApiResponse.error(400, consts.reason.emailValidate, consts.message.emailValidate));
	}
	let passwordHashed = await bcrypt.hashSync(params.password, consts.saltRounds);
	
	await User.findOne({
        where: {
            [Op.or]: [{username: params.username}, {email: params.email}]
        }
    }).then(data => {
        if(data) {
        	return res.send(ApiResponse.error(409, consts.reason.dataExist, consts.message.dataExist));
        }
        const newUser = new User({
        	"username": params.username,
        	"email": params.email,
        	"password": passwordHashed,
        	"title": params.title
        });

        newUser.save()
        		.then(data => {
        			data.password = undefined;
        			res.send(ApiResponse.success(200, consts.message.registerSuccess, data));
        		})
        		.catch(err => {
        			console.log(err);
        		})
    });
}

