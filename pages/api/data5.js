import data from '../../server/DB/data-5.json'

const data5 = (req, res) => {
    res.status(200).send(data)
} 

export default data5