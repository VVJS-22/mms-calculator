import data from '../../server/DB/data-4321.json'

const data4321 = (req, res) => {
    res.status(200).send(data)
} 

export default data4321