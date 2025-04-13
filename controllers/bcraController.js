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
        //manejo de diversos errores http:
        res.status(error.response.status).json(error.response.data);
    }
};

module.exports = {
    getCreditStatus
};