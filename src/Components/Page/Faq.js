import React from "react";

class Faq extends React.Component {


  render() {
    return (
      <div className="container my-4">
        <div className="px-lg-5 px-2">
          <div className="row pt-md-4">
            <div className="col-lg-10  col-12">
              <h2>Domande frequenti (FAQ)</h2>
              <h5>Domande frequenti Su SmartPagamenti</h5>
            </div>
          </div>

          <div className="pb-5">
            <div className="row">
              <div className="col-lg-10 col-12">
                <div
                  id="accordionDivFAQ"
                  className="collapse-faq collapse-div"
                  role="tablist"
                >
                  <div className="collapse-header" id="heading1">
                    <button
                      data-toggle="collapse"
                      data-nfaq="n1"
                      data-target="#accordion1"
                      aria-expanded="false"
                      aria-controls="accordion1"
                      className="collapsed"
                    >
                      Domanda 1
                    </button>
                  </div>
                  <div
                    id="accordion1"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="heading1"
                    data-parent="#accordionDivFAQ"
                  >
                    <div className="collapse-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>

                  <div className="collapse-header" id="heading2">
                    <button
                      data-toggle="collapse"
                      data-nfaq="n2"
                      data-target="#accordion2"
                      aria-expanded="false"
                      aria-controls="accordion2"
                      className="collapsed"
                    >
                      Domanda 2
                    </button>
                  </div>
                  <div
                    id="accordion2"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="heading2"
                    data-parent="#accordionDivFAQ"
                  >
                    <div className="collapse-body">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
