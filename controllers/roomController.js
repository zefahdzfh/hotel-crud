import Room from '../models/Room.js';

const RoomController = {
    index: async (req, res) => {
        const rooms = await Room.getAll();
        res.render('rooms/index', { rooms });
    },

    create: (req, res) => {
        res.render('rooms/create');
    },

    store: async (req, res) => {
        await Room.create(req.body);
        res.redirect('/rooms');
    }
};

export default RoomController;
