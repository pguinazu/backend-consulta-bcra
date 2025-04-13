const { fetchCreditStatusFromBCRA } = require('../services/bcraService');

const getCreditStatus = async (req, res) => {
    const { cuil } = req.params;
    try {
        const credit = await fetchCreditStatusFromBCRA(cuil);
        // const evaluacion = evaluarViabilidad(credit);
        // res.json(credit);
        //200 response:
        res.status(200).json(credit);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos del BCRA' });
    }
};

module.exports = {
    getCreditStatus
};