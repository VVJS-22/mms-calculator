import data from '../../server/DB/data-1234.json'

const data1234 = (req, res) => {
    res.status(200).send(data)
} 

export default data1234