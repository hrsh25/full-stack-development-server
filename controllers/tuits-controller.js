import * as tuitsDao from "./tuits-dao.js";

const createTuit = async (req, res) => {

    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
    // newTuit._id = (new Date()).getTime()+'';
    // newTuit.likes = 0;
    // newTuit.dislikes = 0;
    // newTuit.postedBy = {};
    // newTuit.postedBy.username = "Jose";
    // newTuit.handle = "Science";
    // newTuit.logoImage = "/tuiter/images/elon_musk_dp_48x48.jpeg";
    // newTuit.stats = {};
    // newTuit.stats.likes = 0;
    // newTuit.stats.comments = 0;
    // newTuit.stats.retuits = 0;
    // tuits.push(newTuit);
    // res.json(newTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
    // tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    // res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
    // tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
}

const tuitsController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

export default tuitsController;