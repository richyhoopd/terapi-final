const ctrl = {};

const Usuario = require("../models/user.model");

const bcrypt = require("bcryptjs");

ctrl.obtenerTodos = async (req, res) => {
  res.json(await Usuario.find());
};

ctrl.registrarUsuario = async (req, res) => {
  const { nombre, correo, password, telefono } = req.body;

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  var band = true;
  const usuarios = await Usuario.find();
  
  usuarios.map((u)=>{
    if(u.correo == correo)
      band = false;
  })

  if(band){
    const newUsuario = new Usuario({
      nombre,
      correo,
      telefono,
      password: hash,
    });
    
    await newUsuario.save();
    res.json(newUsuario)
  }else{
    res.json({});
  }
};

ctrl.obtenerUno = async (req, res) => {
  const { id } = req.params;

  const usuario = await Usuario.findById(id);

  res.json(usuario);
};

ctrl.iniciarSesion = async (req, res) => {
  const { correo, password } = req.body;

  const usuarios = await Usuario.find();

  var resp = {};

  usuarios.map((u) => {
    if ( u.correo == correo && bcrypt.compareSync(password, u.password) ) {
      resp = u;
      return;
    }
  });

  res.json(resp);
};

ctrl.agregarContactoEmergencia1 = async(req, res)=>{
    const {id} = req.params;
    const {nombre, telefono} = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id,{
      contacto1: nombre,
      tel_contacto1: telefono
    });

    res.json(usuario);
}


ctrl.agregarContactoEmergencia2 = async(req, res)=>{
  const {id} = req.params;
  const {nombre, telefono} = req.body;

  const usuario = await Usuario.findByIdAndUpdate(id,{
    contacto2: nombre,
    tel_contacto2: telefono
  });

  res.json(usuario);
}

module.exports = ctrl;
