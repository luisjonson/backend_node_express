import TagsModel from "../model/TagsModel.js";

class TagsController{
    async listar(req, res) {
        let tags = await TagsModel.findAll();
        return res.json(tags);
    }

    criar(req, res) {
        let body = req.body;
        TagsModel.create(body)
            .then((tags) => {
                return res.status(201).json(tags);
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    }
}

export default TagsController;