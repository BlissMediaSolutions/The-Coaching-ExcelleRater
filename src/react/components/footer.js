import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  logoutHandler = e => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <footer className="c-footer">
        <div className="container">
          <div className="c-footer__container">
            <div>
              <span className="c-footer__list-item">
                Email: CoachXL@support.com
              </span>
              <span className="c-footer__list-item"> Phone: 0415063336 </span>
              <span className="c-footer__list-item">
                Address: 22 Sporty Street Rowville
              </span>
            </div>
            <div>
              <svg width="73px" height="62px" viewBox="0 0 73 62" version="1.1">
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="footer/main"
                    transform="translate(-1161.000000, -20.000000)"
                    fillRule="nonzero"
                  >
                    <g
                      id="coachingexcellerator"
                      transform="translate(1161.000000, 20.000000)"
                    >
                      <path
                        d="M51.4177791,45.0384615 L51.5260922,44.9632107 C51.7891383,44.7826087 52.0599211,44.5869565 52.3152306,44.3988294 L52.4235437,44.3160535 L58.148665,51.9013378 L58.0403519,51.9765886 C57.707676,52.2173913 57.3672633,52.4657191 57.0268507,52.6989967 L56.9185376,52.7742475 L51.4177791,45.0384615 Z M54.829642,42.3520067 L54.9379551,42.2541806 L55.0385316,42.3444816 L54.9456917,42.2466555 C55.1158981,42.0886288 55.2783677,41.9381271 55.4408374,41.7801003 L55.4795206,41.7424749 L55.5800971,41.8252508 L55.4872573,41.7349498 L55.4949939,41.7274247 L55.5955704,41.8102007 L55.5027306,41.7198997 C55.5491505,41.6747492 55.5878337,41.6371237 55.6342536,41.5919732 L55.7270934,41.4941472 L62.4966626,48.1839465 L62.4038228,48.2742475 C62.0943568,48.5752508 61.7771541,48.8837793 61.4522148,49.1772575 L61.3516383,49.2675585 L54.829642,42.3520067 Z M57.5761529,39.0560201 L57.6457828,38.9431438 C57.7386226,38.7851171 57.839199,38.6120401 57.9320388,38.4464883 L57.9397755,38.4314381 C58.0016687,38.3185619 58.0635619,38.2056856 58.1177184,38.1003344 L58.1796117,37.9799331 L66.6512439,42.3896321 L66.5893507,42.5025084 C66.3727245,42.9088629 66.1483617,43.3076923 65.9239988,43.6839465 L65.8543689,43.7968227 L57.5761529,39.0560201 Z M59.4871056,35.180602 L59.5335255,35.0602007 C59.5722087,34.9774247 59.6031553,34.8946488 59.6341019,34.8043478 C59.7269417,34.5861204 59.8120449,34.367893 59.8894114,34.1571906 L59.9358313,34.0367893 L68.8793993,37.430602 L68.8329794,37.5510033 C68.6937197,37.9122074 68.5467233,38.2809365 68.3997269,38.6346154 L68.3455704,38.7550167 L59.4871056,35.180602 Z M59.8584648,26.9255853 C59.8197816,26.8202341 59.7733617,26.7148829 59.7346784,26.6095318 L59.8584648,26.5493311 L59.7346784,26.5944816 C59.6573119,26.4063545 59.5799454,26.2182274 59.5025789,26.0301003 L59.456159,25.909699 L68.3068871,22.2901338 L68.3610437,22.4105351 C68.5157767,22.7792642 68.6627731,23.1479933 68.8097694,23.5242475 L68.8561893,23.6446488 L59.920358,27.0535117 L59.8584648,26.9255853 Z M60.0798637,30.8486237 C60.0834625,30.7364528 60.0798879,30.6213837 60.0834867,30.5092128 L60.220811,30.4997669 L60.0891246,30.4952585 C60.0878652,30.2918481 60.0866059,30.0884377 60.0853466,29.8850273 L60.0874099,29.756004 L69.6495752,29.7155426 L69.6546851,29.8474642 C69.6600227,30.2473079 69.658187,30.6442534 69.6535324,31.048176 L69.651469,31.1771994 L60.089328,30.9904206 L60.0798637,30.8486237 Z M58.0480886,23.0050167 L57.9784587,22.8846154 C57.9010922,22.7491639 57.8237257,22.6137124 57.7463592,22.4782609 L57.7231493,22.4406355 L57.8314624,22.3653846 L57.7154126,22.4331104 L57.707676,22.4180602 L57.8237257,22.3503344 L57.707676,22.4105351 C57.6612561,22.3277592 57.6148362,22.2525084 57.5684163,22.1697324 L57.4987864,22.0568562 L65.7228459,17.2031773 L65.7924757,17.3160535 C66.0245752,17.6923077 66.2489381,18.0986622 66.4810376,18.5050167 L66.5429308,18.617893 L58.1177184,23.1254181 L58.0480886,23.0050167 Z M55.5104672,19.5434783 C55.4408374,19.4757525 55.3634709,19.4080268 55.293841,19.340301 L55.1932646,19.25 L55.2783677,19.1521739 L55.1855279,19.2424749 L55.1313714,19.1897993 C55.1313714,19.1897993 55.1313714,19.1897993 55.1313714,19.1897993 C55.1313714,19.1897993 55.1313714,19.1897993 55.1236347,19.1822742 C55.0153216,19.0844482 54.9070085,18.9866221 54.7986954,18.888796 L54.6981189,18.8060201 L61.0808556,11.7550167 L61.181432,11.8453177 C61.5295813,12.1538462 61.8777306,12.4698997 62.2026699,12.7859532 L62.2955097,12.8762542 L55.603307,19.6413043 L55.5104672,19.5434783 Z M52.1218143,16.8269231 L52.1914442,16.7140468 L52.1140777,16.819398 C51.8819782,16.6613712 51.642142,16.5108696 51.4100425,16.3603679 L51.2088896,16.2324415 L56.3382888,8.24832776 L56.4543386,8.3235786 C56.8179612,8.5493311 57.1815837,8.79013378 57.5374697,9.02341137 L57.6457828,9.09866221 L52.2378641,16.909699 L52.1218143,16.8269231 Z"
                        id="Shape"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M56.3769721,8.42892977 C56.7405947,8.65468227 57.1042172,8.89548495 57.4523665,9.12876254 L52.2069175,16.7215719 C52.2069175,16.7215719 52.2069175,16.7215719 52.2069175,16.7215719 C52.2069175,16.7215719 52.2069175,16.7215719 52.1991808,16.7215719 C52.1991808,16.7215719 52.1914442,16.7140468 52.1914442,16.7140468 C51.9593447,16.5560201 51.7195085,16.4055184 51.4796723,16.2550167 C51.4796723,16.2550167 51.4719357,16.2550167 51.4719357,16.2474916 C51.4719357,16.2474916 51.464199,16.2474916 51.464199,16.2399666 C51.4564624,16.2399666 51.4564624,16.2324415 51.4487257,16.2324415 C51.4487257,16.2324415 51.4487257,16.2324415 51.4487257,16.2324415 C51.4409891,16.2324415 51.4409891,16.2249164 51.4332524,16.2249164 C51.4177791,16.2173913 51.4023058,16.2023411 51.3868325,16.1948161 L56.3769721,8.42892977 Z M61.0963289,11.9356187 C61.4444782,12.2441472 61.7848908,12.5602007 62.1098301,12.8762542 L55.603307,19.4531773 C55.5336772,19.3854515 55.4563107,19.3177258 55.3866808,19.2424749 C55.3866808,19.2424749 55.3866808,19.2424749 55.3866808,19.2424749 C55.3866808,19.2424749 55.3789442,19.2349498 55.3789442,19.2349498 C55.3712075,19.2274247 55.3634709,19.2198997 55.3557342,19.2123746 C55.3557342,19.2123746 55.3557342,19.2123746 55.3557342,19.2123746 C55.3557342,19.2123746 55.3479976,19.2048495 55.3479976,19.2048495 C55.3479976,19.2048495 55.3479976,19.2048495 55.3402609,19.1973244 C55.3402609,19.1973244 55.3325243,19.1897993 55.3325243,19.1897993 C55.3325243,19.1897993 55.3325243,19.1897993 55.3247876,19.1822742 C55.3247876,19.1822742 55.317051,19.1747492 55.317051,19.1747492 C55.317051,19.1747492 55.3093143,19.1672241 55.3093143,19.1672241 C55.3093143,19.1672241 55.3015777,19.1672241 55.3015777,19.159699 C55.3015777,19.159699 55.293841,19.1521739 55.293841,19.1521739 C55.293841,19.1521739 55.293841,19.1521739 55.2861044,19.1446488 C55.2861044,19.1446488 55.2783677,19.1371237 55.2783677,19.1371237 C55.2783677,19.1371237 55.2783677,19.1371237 55.2706311,19.1295987 C55.2706311,19.1295987 55.2628944,19.1220736 55.2628944,19.1220736 C55.2628944,19.1220736 55.2628944,19.1220736 55.2628944,19.1220736 C55.2551578,19.1145485 55.2551578,19.1145485 55.2474211,19.1070234 C55.2474211,19.1070234 55.2474211,19.1070234 55.2474211,19.1070234 C55.2396845,19.0994983 55.2396845,19.0994983 55.2319478,19.0919732 C55.2319478,19.0919732 55.2319478,19.0919732 55.2319478,19.0919732 C55.2242112,19.0919732 55.2242112,19.0844482 55.2164745,19.0844482 C55.2164745,19.0844482 55.2164745,19.0844482 55.2164745,19.0844482 C55.1081614,18.9866221 54.9921117,18.8812709 54.8837985,18.7834448 L61.0963289,11.9356187 Z M65.676426,17.3762542 C65.9085255,17.7525084 66.1328883,18.1513378 66.3572512,18.5576923 L58.1641383,22.937291 C58.1409284,22.8996656 58.1254551,22.8620401 58.1022451,22.8244147 C58.1022451,22.8244147 58.1022451,22.8168896 58.1022451,22.8168896 C58.1022451,22.8168896 58.1022451,22.8168896 58.1022451,22.8168896 C58.0248786,22.6814381 57.9475121,22.5459866 57.8701456,22.4105351 C57.8701456,22.4105351 57.8701456,22.4105351 57.8701456,22.4105351 C57.8701456,22.40301 57.862409,22.40301 57.862409,22.3954849 C57.862409,22.3954849 57.862409,22.3954849 57.862409,22.3954849 C57.862409,22.3954849 57.8546723,22.3879599 57.8546723,22.3879599 C57.8546723,22.3879599 57.8546723,22.3879599 57.8546723,22.3804348 C57.8546723,22.3804348 57.8546723,22.3729097 57.8469357,22.3729097 C57.8469357,22.3729097 57.8469357,22.3729097 57.8469357,22.3653846 C57.8469357,22.3653846 57.8469357,22.3578595 57.8469357,22.3578595 C57.8469357,22.3578595 57.8469357,22.3503344 57.839199,22.3503344 C57.839199,22.3503344 57.839199,22.3503344 57.839199,22.3428094 C57.839199,22.3428094 57.839199,22.3352843 57.8314624,22.3352843 C57.8314624,22.3352843 57.8314624,22.3352843 57.8314624,22.3352843 C57.7850425,22.2525084 57.7386226,22.1772575 57.6922027,22.0944816 L65.676426,17.3762542 Z M68.221784,22.4632107 C68.376517,22.8244147 68.5235133,23.2006689 68.6705097,23.569398 L59.9822512,26.8804348 C59.943568,26.7750836 59.8971481,26.6697324 59.8584648,26.5643813 C59.8584648,26.5643813 59.8584648,26.5643813 59.8584648,26.5643813 C59.8584648,26.5643813 59.8584648,26.5568562 59.8584648,26.5568562 C59.7810983,26.3687291 59.7037318,26.180602 59.6263653,25.9849498 L68.221784,22.4632107 Z M60.0209345,34.2098662 L68.7169296,37.5058528 C68.5776699,37.8670569 68.4306735,38.235786 68.2836772,38.5894649 L59.6650485,35.1053512 C59.7037318,35.0225753 59.7346784,34.9322742 59.765625,34.8494983 C59.8507282,34.6312709 59.9358313,34.4205686 60.0209345,34.2098662 Z M58.2337682,38.1605351 L66.473301,42.4498328 C66.2566748,42.8561873 66.0323119,43.2550167 65.8156857,43.6312709 L57.7618325,39.0033445 C57.8546723,38.8377926 57.9552488,38.6722408 58.0480886,38.506689 C58.0480886,38.506689 58.0480886,38.506689 58.0480886,38.506689 C58.0480886,38.506689 58.0558252,38.4991639 58.0558252,38.4991639 C58.0558252,38.4991639 58.0558252,38.4991639 58.0558252,38.4991639 C58.0558252,38.4991639 58.0558252,38.4916388 58.0558252,38.4916388 C58.1177184,38.3787625 58.171875,38.2658863 58.2337682,38.1605351 Z M55.7193568,41.6897993 L62.3032464,48.1989967 C61.9937803,48.5 61.6765777,48.8010033 61.3516383,49.1020067 L55.0153216,42.3670569 C55.0153216,42.3670569 55.0153216,42.3670569 55.0230583,42.3595318 C55.0230583,42.3595318 55.0230583,42.3595318 55.0230583,42.3595318 C55.0230583,42.3595318 55.0307949,42.3520067 55.0307949,42.3520067 C55.2010012,42.1939799 55.3634709,42.0434783 55.5259405,41.8854515 C55.5259405,41.8854515 55.5259405,41.8854515 55.5259405,41.8854515 C55.5259405,41.8854515 55.5336772,41.8779264 55.5336772,41.8779264 C55.5336772,41.8779264 55.5336772,41.8779264 55.5336772,41.8779264 C55.5336772,41.8779264 55.5414138,41.8704013 55.5414138,41.8704013 C55.5414138,41.8704013 55.5414138,41.8704013 55.5491505,41.8628763 C55.5491505,41.8628763 55.5568871,41.8553512 55.5568871,41.8553512 C55.5568871,41.8553512 55.5646238,41.8478261 55.5646238,41.8478261 C55.5646238,41.8478261 55.5646238,41.8478261 55.5723604,41.8478261 C55.5723604,41.8478261 55.5800971,41.840301 55.5800971,41.840301 C55.5800971,41.840301 55.5800971,41.840301 55.5800971,41.840301 C55.6342536,41.7725753 55.6806735,41.7274247 55.7193568,41.6897993 Z M52.3925971,44.5041806 L57.9552488,51.8787625 C57.6225728,52.1195652 57.2821602,52.367893 56.9494842,52.6011706 L51.6034587,45.076087 C51.8742415,44.8879599 52.1372876,44.6998328 52.3925971,44.5041806 Z M56.2918689,8.06772575 L56.1448726,8.29347826 L51.154733,16.0518395 L51.0154733,16.2700669 L51.2398362,16.4130435 L51.2630461,16.4280936 L51.2862561,16.4431438 L51.2939927,16.4506689 L51.3017294,16.458194 L51.309466,16.458194 L51.3172027,16.4657191 L51.3249393,16.4732441 L51.332676,16.4807692 C51.5647755,16.6312709 51.8046117,16.7817726 52.0289745,16.9397993 L52.0367112,16.9397993 L52.0444478,16.9397993 L52.2688107,17.0978261 L52.4235437,16.8795987 L57.6689927,9.2867893 L57.8159891,9.07608696 L57.5993629,8.93311037 C57.2434769,8.69230769 56.8798544,8.4590301 56.5162318,8.22575251 L56.2918689,8.06772575 Z M61.0731189,11.5593645 L60.895176,11.7550167 L54.6903823,18.6103679 L54.5124393,18.8060201 L54.7058556,18.979097 C54.8141687,19.0769231 54.9224818,19.1747492 55.0307949,19.2725753 L55.0385316,19.2801003 L55.0462682,19.2876254 L55.0540049,19.2951505 L55.0617415,19.3026756 L55.0694782,19.3102007 L55.0772148,19.3177258 L55.0849515,19.3252508 L55.0926881,19.3327759 L55.2783677,19.1446488 L55.0926881,19.3327759 L55.1004248,19.340301 L55.1081614,19.3478261 L55.1158981,19.3553512 L55.1236347,19.3628763 L55.1313714,19.3704013 L55.139108,19.3779264 L55.1468447,19.3854515 L55.1545813,19.3929766 L55.3479976,19.2048495 L55.162318,19.3929766 L55.1700546,19.4005017 L55.1777913,19.4080268 L55.1932646,19.4230769 L55.2396845,19.4682274 C55.3015777,19.5284281 55.3634709,19.5811037 55.4176274,19.6413043 L55.6110437,19.8294314 L55.7967233,19.6413043 L62.3032464,13.0643813 L62.488926,12.8762542 L62.3032464,12.6956522 C61.9705704,12.3795987 61.6301578,12.0635452 61.2742718,11.7474916 L61.0731189,11.5593645 Z M65.7692658,17.0150502 L65.5371663,17.1505017 L57.5452063,21.8687291 L57.3208434,22.0041806 L57.4523665,22.2299331 C57.4987864,22.3051839 57.5452063,22.3804348 57.5916262,22.4632107 L57.5916262,22.4707358 L57.5993629,22.4782609 L57.5993629,22.485786 L57.6070995,22.493311 L57.6070995,22.5008361 L57.6148362,22.5083612 L57.6225728,22.5234114 C57.6225728,22.5234114 57.6225728,22.5234114 57.6225728,22.5309365 L57.6225728,22.5384615 L57.6225728,22.5459866 C57.6999393,22.6814381 57.7773058,22.8168896 57.8546723,22.9523411 L57.8546723,22.9598662 C57.8778823,22.9974916 57.9010922,23.0351171 57.9165655,23.0727425 L58.0480886,23.3060201 L58.2879248,23.1780936 L66.4810376,18.798495 L66.7131371,18.6705686 L66.5893507,18.4448161 C66.3649879,18.0309365 66.1328883,17.632107 65.9007888,17.2483278 L65.7692658,17.0150502 Z M68.3687803,22.1170569 L68.1212075,22.222408 L59.5180522,25.7441472 L59.2704794,25.8419732 L59.3710558,26.0827759 C59.4484223,26.270903 59.5257888,26.4590301 59.6031553,26.6471572 L59.6031553,26.6546823 L59.610892,26.6622074 C59.6495752,26.7675585 59.6959951,26.8729097 59.7346784,26.9782609 L59.8275182,27.2265886 L60.0828277,27.1287625 L68.7710862,23.8177258 L69.018659,23.7198997 L68.9258192,23.479097 C68.7788228,23.1103679 68.6318265,22.7341137 68.4770934,22.3653846 L68.3687803,22.1170569 Z M59.8662015,33.8712375 L59.7733617,34.1195652 C59.6882585,34.3377926 59.6031553,34.5560201 59.5180522,34.7591973 C59.4871056,34.8419732 59.4484223,34.9247492 59.4174757,35.0150502 L59.3168993,35.2558528 L59.5644721,35.3536789 L68.1753641,38.8302676 L68.4229369,38.9280936 L68.5235133,38.6797659 C68.6705097,38.326087 68.8175061,37.9573579 68.9567658,37.5961538 L69.0496056,37.3553512 L68.8020328,37.2650502 L60.1215109,33.9615385 L59.8662015,33.8712375 Z M58.1177184,37.8068562 L57.993932,38.0401338 C57.9397755,38.1454849 57.8778823,38.2583612 57.8159891,38.3637124 L57.8159891,38.3712375 L57.8159891,38.3787625 L57.8082524,38.3862876 L57.8005158,38.3938127 C57.707676,38.5593645 57.6148362,38.7173913 57.5219964,38.8754181 L57.3904733,39.1011706 L57.6148362,39.229097 L65.6686893,43.8494983 L65.9007888,43.9849498 L66.0323119,43.7516722 C66.2566748,43.3754181 66.4810376,42.9690635 66.6976638,42.562709 L66.8214502,42.3369565 L66.5893507,42.2165552 L58.349818,37.9272575 L58.1177184,37.8068562 Z M55.7193568,41.3135452 L55.5259405,41.5016722 C55.4795206,41.5468227 55.4408374,41.5844482 55.3944175,41.6295987 L55.3866808,41.6371237 L55.3789442,41.6446488 L55.3712075,41.6521739 L55.3634709,41.659699 L55.3557342,41.6672241 L55.3479976,41.6747492 L55.3402609,41.6822742 C55.1777913,41.8327759 55.0153216,41.9908027 54.8451153,42.1488294 L54.8373786,42.1563545 L54.829642,42.1638796 L54.6362257,42.3369565 L54.8141687,42.5250836 L61.1504854,49.2600334 L61.336165,49.4556856 L61.537318,49.2750836 C61.8622573,48.9740803 62.1871966,48.6730769 62.4966626,48.3645485 L62.6823422,48.1839465 L62.4966626,48.0033445 L55.9127731,41.4941472 L55.7193568,41.3135452 Z M52.4544903,44.1354515 L52.2378641,44.2934783 C51.9825546,44.4816054 51.7117718,44.6697324 51.4487257,44.8578595 L51.2320995,45.0083612 L51.3790959,45.2190635 L56.7251214,52.7441472 L56.8798544,52.9623746 L57.1042172,52.8118729 C57.4446299,52.5785953 57.7850425,52.3302676 58.1177184,52.0894649 L58.326608,51.9314381 L58.171875,51.7207358 L52.6092233,44.3461538 L52.4544903,44.1354515 Z"
                        id="Shape"
                        fill="#FFFFFF"
                      />
                      <circle id="Oval" fill="#FFFFFF" cx="37" cy="31" r="17" />
                      <path
                        d="M48.643847,46.8265556 C45.0079191,48.7631063 40.8623528,50.0389515 36.8384912,50.0389515 C29.4601438,50.0389515 21.671043,45.7405683 17.3429197,40.9789319 C14.619777,37.9867712 13.2658122,34.8047526 12.6344691,32.8606075 C12.2465354,31.6682999 12.2465354,30.3317001 12.6344691,29.1393925 C13.2658122,27.1952474 14.619777,24.0208231 17.3429197,21.0210681 C21.671043,16.2594317 29.4601438,11.9610485 36.8384912,11.9610485 C40.8395332,11.9610485 44.9622799,13.2292994 48.5906012,15.1430671 L73,22.6006859 L66.1617172,14.7481627 C59.6581223,7.00195982 47.9364385,0 36.8384912,0 C25.7405439,0 14.0264666,7.00955414 7.51526519,14.755757 C3.41533813,19.6313082 1.37678441,24.810632 0.433572992,27.9698677 C-0.144524331,29.9064184 -0.144524331,32.0935816 0.433572992,34.0301323 C1.37678441,37.1969623 3.41533813,42.3686918 7.51526519,47.244243 C14.0264666,54.9980402 25.7405439,62 36.8384912,62 C47.9364385,62 59.6505158,54.9980402 66.1617172,47.244243 L73,38.3588927 L48.643847,46.8265556 Z"
                        id="Shape"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M37.3786453,3 C27.3228051,3 16.7062021,9.32781145 10.8106152,16.3268687 C7.09745644,20.7314478 5.24845492,25.4075421 4.39215504,28.2659933 C3.86928165,30.0157576 3.86928165,31.9842424 4.39215504,33.7340067 C5.24845492,36.5924579 7.09745644,41.2610101 10.8106152,45.6731313 C16.7062021,52.6721886 27.3228051,59 37.3786453,59 C47.4344855,59 58.0435107,52.6721886 63.9466754,45.6731313 L65,44.3080135 L51.0339762,49.6553535 C46.8509892,51.8727273 42.0845057,53.3358923 37.4620019,53.3358923 C28.9823597,53.3358923 20.0253113,47.8980471 15.0466474,42.4375758 C11.916985,39.0059259 10.3559427,35.3630976 9.6360446,33.1306397 C9.19652784,31.7655219 9.19652784,30.226936 9.6360446,28.8693603 C10.3635206,26.6444444 11.916985,23.0016162 15.0466474,19.5624242 C20.0253113,14.1094949 28.9823597,8.66410774 37.4620019,8.66410774 C42.0617721,8.66410774 46.8055219,10.1121886 50.9733532,12.3144781 L64.4847045,16.9377778 L63.9466754,16.3268687 C58.0435107,9.32781145 47.4269077,3 37.3786453,3 Z"
                        id="Shape"
                        fill="#ED1F24"
                      />
                      <path
                        d="M47,13.9921875 C47.9548803,14.640625 49.7707182,15.9609375 51.2734807,17.71875 C52.78407,19.484375 53.6763352,20.9453125 54.2007366,22 L64,7 L47,13.9921875 Z"
                        id="Shape"
                        stroke="#FFFFFF"
                        strokeWidth="2.91400003"
                        fill="#ED1F24"
                      />
                      <path
                        d="M35.2909296,44.9581002 C37.909957,45.1671885 40.380176,44.5847281 42.5155761,43.4123398 C43.2968201,42.9792282 43.0884884,41.7471004 42.210519,41.6350888 C36.1614586,40.8360726 32.418928,37.4010496 30.908523,35.6760707 C30.4918596,35.2056219 30.640668,34.4439429 31.1986994,34.1825824 C32.4263684,33.5926545 34.569209,32.6144197 36.7715729,31.9050128 C37.6197807,31.6287175 37.6197807,30.3741873 36.7715729,30.097892 C34.5766494,29.3810177 32.4263684,28.4102503 31.1986994,27.8203224 C30.640668,27.5514945 30.4993,26.797283 30.908523,26.3268342 C32.418928,24.5943878 36.1540182,21.1668322 42.210519,20.367816 C43.0884884,20.248337 43.2968201,19.0162091 42.5081357,18.590565 C40.6629119,17.574993 38.5647138,17 36.3325882,17 C28.6763974,17 22.5231712,23.7804367 23.0291197,31.94235 C23.460664,38.8198634 28.7433612,44.4353793 35.2909296,44.9581002 Z"
                        id="Shape"
                        fill="#ED1F24"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="c-footer__bottom">
            <div>
              <Link className="c-footer__link" to="/">
                Home
              </Link>
              <Link className="c-footer__link" to="/videos">
                Videos
              </Link>
              <Link className="c-footer__link" to="/about">
                About Us
              </Link>
              <Link className="c-footer__link" to="/termsandconditions">
                Terms and Conditions
              </Link>
              <Link
                to="/login"
                className="c-footer__link"
                onClick={e => this.logoutHandler(e)}
              >
                Logout
              </Link>
            </div>

            <div>
              <a className="c-footer__social-link">
                <i className="fa fa-facebook" />
              </a>
              <a className="c-footer__social-link">
                <i className="fa fa-instagram" />
              </a>
              <a className="c-footer__social-link">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
