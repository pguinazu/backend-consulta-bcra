const { fetchCreditStatusFromBCRA } = require('../services/bcraService');

const getCreditStatus = async (req, res) => {
    const { cuil } = req.params;
    try {
        const credit = await fetchCreditStatusFromBCRA(cuil);
        //200 response:
        res.status(200).json(credit);
    } catch (error) {
        if (error.response) {
          // Errores del BCRA con código HTTP (404, 500, etc.)
          return res.status(error.response.status).json({
            error: error.response.data?.error || 'Error externo del BCRA'
          });
        } else if (error.request) {
          // Timeout, sin respuesta, etc.
          return res.status(503).json({ error: 'Sin respuesta del servidor del BCRA' });
        } else {
          // Otro error en el código
          return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};

module.exports = {
    getCreditStatus
};