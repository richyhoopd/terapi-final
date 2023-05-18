const ctrl = {};
const Terapeuta = require('../models/terapist.model');
const bcrypt = require("bcryptjs");

ctrl.iniciarSesion = async (req, res) => {
    const { correo, password } = req.body;
  
    const Terapeutas = await Terapeuta.find();
  
    var resp = {};
  
    Terapeutas.map((u) => {
      if ( u.correo == correo && bcrypt.compareSync(password, u.password) ) {
        resp = u;
        return;
      }
    });
  
    res.json(resp);
};


ctrl.registrarUsuario = async (req, res) => {
    const { nombre, correo, password, telefono, cedula, especializacion, descripcion } = req.body;
  
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
  
    var band = true;
    const Terapeutas = await Terapeuta.find();
    
    Terapeutas.map((u)=>{
      if(u.correo == correo)
        band = false;
    })
  
    if(band){
      const newTerapeuta = new Terapeuta({
        nombre,
        correo,
        telefono,
        cedula, 
        especializacion, 
        descripcion,
        password: hash,
      });
      
      await newTerapeuta.save();
      res.json(newTerapeuta)
    }else{
      res.json({});
    }
};

ctrl.obtenerTodos = async(req, res)=>{
    const terapeutas = await Terapeuta.find();

    res.json(terapeutas);
}

ctrl.obtenerUno = async(req, res)=>{
    const {id} = req.params;

    const terapeuta = await Terapeuta.findById(id);

    res.json(terapeuta);
}

module.exports = ctrl;