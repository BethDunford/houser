const getHouses = async (req, res) => {
    const db = req.app.get('db');
    const retrievedHouses = await db.getHouses();
    if (db) {
        res.status(200).json(retrievedHouses);
    }
};

const addHouse = async (req, res) => {
    const db = req.app.get('db');
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;
    const addedHouse = await db.addHouse([
        name,
        address,
        city,
        state,
        zip,
        img,
        mortgage,
        rent
    ]);
    if (db) {
        res.status(200).json(addedHouse);
    }
}

const deleteHouse = async (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const deletedHouse = await db.deleteHouse([id]);
    if (db) {
        res.status(200).json(deletedHouse);
    }
};

function editHouse (req, res){
    const { id } = req.params;
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;
    const index = houses.findIndex (element => element.id == id);
    houses[index].name = name;
    houses[index].address = address;
    houses[index].city = city;
    houses[index].state = state;
    houses[index].zip = zip;
    houses[index].img = img;
    houses[index].mortgage = mortgage;
    houses[index].rent = rent;
}

module.exports = {
    getHouses,
    addHouse,
    deleteHouse,
    editHouse
};