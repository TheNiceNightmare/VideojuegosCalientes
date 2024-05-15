const HttpError = require('../models/http-error');
const uuid = require('uuid');

let DUMMY_GAMES = [
    {
        id: "g1",
        title: "Super Mario Bros.",
        creator: "Shigeru Miyamoto"
    },
    {
        id: "g2",
        title: "The Legend of Zelda",
        creator: "Shigeru Miyamoto"
    },
    {
        id: "g3",
        title: "Pac-Man",
        creator: "Toru Iwatani"
    },
    {
        id: "g4",
        title: "Space Invaders",
        creator: "Tomohiro Nishikado"
    },
    {
        id: "g5",
        title: "Sonic the Hedgehog",
        creator: "Yuji Naka"
    },
    {
        id: "g6",
        title: "Street Fighter II",
        creator: "Akira Nishitani"
    },
    {
        id: "g7",
        title: "Donkey Kong",
        creator: "Shigeru Miyamoto"
    },
    {
        id: "g8",
        title: "Mega Man",
        creator: "Akira Kitamura"
    },
    {
        id: "g9",
        title: "Final Fantasy",
        creator: "Hironobu Sakaguchi"
    },
    {
        id: "g10",
        title: "Tetris",
        creator: "Alexey Pajitnov"
    },
    {
        id: "g11",
        title: "Metroid",
        creator: "Makoto Kano"
    },
    {
        id: "g12",
        title: "Castlevania",
        creator: "Hitoshi Akamatsu"
    },
    {
        id: "g13",
        title: "Dragon Quest",
        creator: "Yuji Horii"
    },
    {
        id: "g14",
        title: "Double Dragon",
        creator: "Yoshihisa Kishimoto"
    },
    {
        id: "g15",
        title: "Punch-Out!!",
        creator: "Genyo Takeda"
    },
    {
        id: "g16",
        title: "Contra",
        creator: "Koji Hiroshita"
    },
    {
        id: "g17",
        title: "Galaga",
        creator: "Shigeru Yokoyama"
    },
    {
        id: "g18",
        title: "Frogger",
        creator: "Akira Hashimoto"
    },
    {
        id: "g19",
        title: "Duck Hunt",
        creator: "Hiroji Kiyotake"
    },
    {
        id: "g20",
        title: "Q*bert",
        creator: "Warren Davis"
    }
];

const getAllVideojuegosRetro = (req, res, next)=>{
    res.json({videojuegoRetro : DUMMY_GAMES});
};

const getVideojuegosRetroById = (req, res, next) => {    
    const videojuego = DUMMY_GAMES.find(g => {
        return g.id === req.params.pid;
    });
    if (!videojuego){        
        const error = new Error('El video juego Retro no existe para el id especificado');
        error.code = 404;
        next(error);
    }
    else{
        res.json({videojuego});
    }    
};

const getVideojuegosRetroByUsers = (req, res, next)=>{
    const videojuego = DUMMY_GAMES.find(p => {
        return p.creator === req.params.uid
    });    

    if (!videojuego){
        const error = new HttpError('El video juego Retro no existe para el id de usuario especificado', 404);
        throw error;
    }

    res.json({videojuego});
};

const saveVideojuegoRetro = (req, res, next)=>{
    const {title, creator} = req.body;
    const createdVideojuegoRetro = {
        id: uuid.v4(),
        title,
        creator
    };
    DUMMY_GAMES.push(createdVideojuegoRetro);
    res.status(201).json({VideojuegoRetro:createdVideojuegoRetro});
};

const updateVideojuegoRetro = (req, res, next) =>{
    const { title }  = req.body;
    const VideojuegoRetroId = req.params.pid;

    const updatedVideojuegoRetro = {... DUMMY_GAMES.find(g => g.id === VideojuegoRetroId)};
    const VideojuegoRetroIndex = DUMMY_GAMES.findIndex(g => g.id === VideojuegoRetroId);

    updatedVideojuegoRetro.title = title;

    DUMMY_GAMES[VideojuegoRetroIndex] = updatedVideojuegoRetro;

    res.status(200).json({VideojuegoRetro: updatedVideojuegoRetro});
};

const deleteVideojuegoRetro = (req, res, next) => {
    const VideojuegoRetroId = req.params.pid;
    DUMMY_GAMES = DUMMY_GAMES.filter(p => p.id !== VideojuegoRetroId)
    res.status(200).json({message: 'Lugar Borrado'});
};

exports.getAllVideojuegosRetro = getAllVideojuegosRetro;
exports.getVideojuegosRetroById = getVideojuegosRetroById;
exports.getVideojuegosRetroByUsers = getVideojuegosRetroByUsers;
exports.saveVideojuegoRetro = saveVideojuegoRetro;
exports.updateVideojuegoRetro = updateVideojuegoRetro;
exports.deleteVideojuegoRetro = deleteVideojuegoRetro;