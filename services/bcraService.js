const axios = require('axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const VERCEL_BASE_URL = 'https://bcra-proxy-railway-production.up.railway.app/consulta';

const fetchCreditStatusFromBCRA = async (cuil) => {
  const response = await axios.get(`${VERCEL_BASE_URL}/${cuil}`);
  return response.data;
};

// const evaluarViabilidad = (results) => {
//   const entidades = results?.periodos?.[0]?.entidades ?? [];

//   let viabilidadGlobal = 'Viable';
//   const resumen = [];

//   for (const e of entidades) {
//     let riesgo = 'Bajo';
//     if (e.situacion === 3) riesgo = 'Medio';
//     else if (e.situacion === 4) riesgo = 'Alto';
//     else if (e.situacion === 5) riesgo = 'Muy alto';

//     if (e.procesoJud || e.refinanciaciones || e.situacion >= 4) {
//       viabilidadGlobal = 'No viable';
//     } else if (e.situacion === 3 && viabilidadGlobal !== 'No viable') {
//       viabilidadGlobal = 'Revisar';
//     }

//     resumen.push({
//       entidad: e.entidad,
//       monto: e.monto,
//       situacion: e.situacion,
//       riesgo,
//     });
//   }

//   return { resumen, viabilidadGlobal };
// };

module.exports = { fetchCreditStatusFromBCRA };
