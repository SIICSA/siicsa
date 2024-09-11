import React, { useState } from "react";

const Politicas = () => {
  const [showPoliticas, setShowPoliticas] = useState(false);

  return (
    <div>
      <div
        className="text-center items-center mb-5 cursor-pointer flex"
        onClick={() => setShowPoliticas(!showPoliticas)}
      >
        <div className="grow h-[2px] bg-[#c6101d]"></div>
        <div className="w-fit flex justify-around gap-3 text-sm text-gray-400 my-2">
          <img
            src="/siicsa/iamges/down.svg"
            className={
              (showPoliticas ? "rotate-180" : "") +
              " w-3 ml-3 transition-all duration-200"
            }
          />

          {showPoliticas
            ? "Ocultar Política de Privacidad"
            : "Ver Política de Privacidad"}

          <img
            src="/siicsa/iamges/down.svg"
            className={
              (showPoliticas ? "rotate-180" : "") +
              " w-3 mr-3 transition-all duration-200"
            }
          />
        </div>
        <div className="grow h-[2px] bg-[#c6101d]"></div>
      </div>
      {showPoliticas ? (
        <p className="text-[10px] text-center md:text-left">
          El presente regula el uso de los servicios que puede prestar Servicio
          Integral de Ingeniería civil del Bajío, S.A. de C.V. y/o sus filiales
          (en adelante «SIICSA» o «SIICSA BAJÍO») a través del programa de
          cómputo, web site o las páginas o sitios hospedados, ubicados o
          ligados al o en el mismo, ubicados en las direcciones www.siicsamx.com
          (en adelante el «Sitio»). Accediendo a esta web site acepta los
          siguientes términos y condiciones, por lo que resulta indispensable
          que el usuario las lea previamente en cada caso y de no estar total o
          parcialmente de acuerdo con ella(s), se abstenga de usar la parte del
          Sitio o la sección del Sitio regulada bajo esa condición o
          especificación; en caso de que el usuario utilice la parte del Sitio
          regulada por una o más condiciones especiales se entenderá que se
          somete total e incondicionalmente a ellas. El acceso a este Sitio es
          responsabilidad exclusiva de los usuarios. El simple acceso a este
          Sitio no supone ningún tipo de relación de carácter comercial entre
          SIICSA BAJÍO y el usuario. El acceso y navegación en este Sitio supone
          aceptar y conocer las advertencias legales, condiciones y términos de
          uso contenidas en ella. El usuario reconoce que el uso del Sitio no le
          implica ningún derecho de propiedad sobre el mismo, cualquiera de sus
          elementos o contenidos. SIICSA BAJÍO se reserva el derecho, a su
          entera discreción, de negarle el acceso al Sitio en cualquier momento.
          SIICSA BAJÍO celebra convenios con terceros ocasionalmente para
          proporcionar a sus clientes la oportunidad de obtener servicios,
          productos o precios especiales ofrecidos por el tercero. No se
          considerará que usted infringe este convenio cuando actúa de acuerdo a
          los términos y condiciones de tal programa. De la misma manera, los
          términos y condiciones en este convenio se considerarán como ampliados
          hasta el grado necesario para permitir a tales terceros que operen
          dentro de los términos de un convenio por escrito que haya celebrado
          con nosotros. Uso y acceso: Los derechos del contenido del Sitio son
          propiedad de SIICSA BAJÍO o en su caso, cuenta con los derechos y/o
          autorizaciones respectivas, según sea el caso, quedando estrictamente
          prohibida la reproducción parcial o total del Sitio. Algunas de las
          fotos mostradas en este sitio no pertenecen a SIICSA BAJÍO y han sido
          tomadas por sus fotógrafos en áreas públicas del estado de Guanajuato.
          Independientemente de lo anterior, ninguna parte de la información del
          Sitio puede sustraerse, modificarse, reproducirse, almacenarse,
          transmitirse por ningún medio ni de ninguna forma, ya sea electrónico,
          óptico, fotocopia, etc. Lo anterior sin distinción de que sea para uso
          personal o lucro, sin previa autorización de SIICSA BAJÍO. SIICSA
          BAJÍO no comercializa o elabora algún producto o servicio a menores de
          edad, sin embargo, si un menor de 18 años desea adquirir algún
          producto o servicio, puede usar el Sitio sólo con la supervisión de un
          padre o tutor, siendo de éste último la responsabilidad total. <br />
          Ligas a otros sitios: SIICSA BAJÍO no asume responsabilidad alguna con
          los contenidos y servicios comerciales o de otra índole, páginas webs
          que se puedan enlazar electrónicamente (link) directa o indirectamente
          a través del Sitio. <br />
          Comunicados: Las notificaciones podrán ser enviadas por medio del
          correo electrónico o vía WhatsApp con el número que se le proporcione
          directamente en el correo electrónico. El Sitio también puede proveer
          notificaciones de cambios, u otros asuntos, mostrándole avisos o
          enlaces a anuncios en el Sitio. <br />
          Límite de responsabilidad: La información contenida en este Sitio es
          sólo enunciativa, por lo que de ninguna manera constituye una oferta
          vinculante que obligue a SIICSA BAJÍO, sus filiales, sucursales o
          relacionadas a celebrar contrato/Servicio alguno en relación con tales
          operaciones. SIICSA BAJÍO se reserva el derecho de modificar la
          información aquí contenida cuando lo estime conveniente y sin previo
          aviso. El usuario expresamente entiende y conviene que el uso del
          Sitio es bajo su propio riesgo. <br />
          Cualquier material descargado («downloaded») o de cualquier otra forma
          obtenido por medio del uso del Sitio es hecho bajo propia discreción y
          riesgo del usuario, siendo absolutamente responsable por cualquier
          daño al sistema de su computadora o pérdida de datos que resulte de la
          descarga («download») de cualquiera de estos materiales. SIICSA BAJÍO
          no asume responsabilidad y no adquiere ninguna responsabilidad por
          causa de problemas técnicos que se pudieran producir en equipos
          informáticos que se utilicen durante la conexión a la red Internet, ya
          sea a través del Sitio de SIICSA BAJÍO o de otras páginas webs. Los
          usuarios de este Sitio aceptan que SIICSA BAJÍO, no será responsable
          de ninguna pérdida, directa o indirecta, derivada del uso de la
          información desplegada en este Sitio o por el acceso a otros espacios
          en Internet vinculados con él. Los derechos de propiedad intelectual
          de este Sitio y de las pantallas que muestran estas páginas, y de la
          información y material que aparecen en las mismas y de su disposición,
          pertenecen a SIICSA BAJÍO salvo que se indique lo contrario. <br />
          Propiedad intelectual: El logotipo de SIICSA BAJÍO así como las marcas
          de productos o servicios y nombres comerciales que aparezcan en este
          Sitio son marcas registradas propiedad de SIICSA BAJÍO. <br />
          Privacidad: SIICSA BAJÍO se reserva el derecho para utilizar
          tecnología cookie o de cualquier otro tipo para identificar a los
          usuarios de su Sitio. <br />
          SIICSA BAJÍO no se hace responsable por el acceso al Sitio, de manera
          enunciativa pero no limitativa, la privacidad y seguridad, vigencia,
          disponibilidad, permanencia, etc. <br />
          Legislación aplicable y Jurisdicción: El usuario al hacer uso del
          Sitio de SIICSA BAJÍO, acepta de manera expresa, someterse en caso de
          cualquier controversia, a la jurisdicción de los tribunales de los
          Estados Unidos Mexicanos, así como a las leyes aplicables para el caso
          concreto vigentes en dicho lugar, renunciando expresamente a cualquier
          otra jurisdicción que por motivo de su nacionalidad o domicilio
          pudiera corresponder. <br />
        </p>
      ) : null}
    </div>
  );
};

export default Politicas;
