import "./App.css";
import messages from "./messages.json";

function App() {
  const navItems = [
    { id: "#whatIs", label: messages.whatIs.title },
    { id: "#cuantitativo", label: messages.quantitative.title },
    { id: "#cualitativo", label: messages.qualitative.title },
    { id: "#mixed", label: messages.mixed.title },
    { id: "#instrumentos", label: "Instrumentos" },
  ];
  const metodosURL =
    "https://docentesaldia.com/2024/03/06/investigacion-cualitativa-cuantitativa-y-mixta-resumen/";

  const disenioVideo = "https://www.youtube.com/watch?v=xJVASFCzixU";

  const mail1 = "nmiramag@estudiante.ibero.edu.co";
  const mail2 = "cmoraari@estudiante.ibero.edu.co";

  const parseUrl = (url) => {
    if (url?.includes("youtube.com/watch?v=")) {
      const id = url.split("v=")[1].split("&")[0];
      return "https://www.youtube.com/embed/" + id;
    }

    return "";
  };

  return (
    <div className="ds-whitespace-pre-line">
      <header className="ds-relative ds-py-10 md:ds-py-14 ds-px-6 ds-grid ds-place-items-center">
        <div className="ds-flex ds-flex-col ds-gap-5 ds-text-center md:ds-w-3/4">
          <h1 className="ds-text-3xl ds-font-extrabold ds-text-dark-blue">
            {messages.title}
          </h1>
          <article className="ds-text-gray-800">{messages.intro}</article>
          <p className="ds-absolute ds-bottom-3 ds-left-4 ds-text-sm ds-font-medium ds-text-gray-400">
            Autores: Nelsi Miramag y Cristian Mora
          </p>
        </div>
        <div className="ds-absolute ds-h-full ds-w-full -ds-z-10 ds-bg-cover ds-bg-light-gray ds-opacity-50"></div>
      </header>
      <main className="ds-h-fit ds-max-w-[1200px] ds-mx-auto">
        <nav className="ds-flex ds-justify-center ds-mt-6">
          <ul className="ds-flex ds-gap-4">
            {navItems.map((sec) => (
              <li key={sec.id}>
                <a href={sec.id} className="section-nav">
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ds-pt-6 ds-pb-10 ds-space-y-10">
          {/* section */}
          <div id="whatIs" className="ds-px-10">
            <section className="ds-flex ds-flex-col ds-items-center ds-text-center ds-rounded-lg ds-py-8 ds-text-white ds-bg-medium-blue">
              <div className="ds-w-1/2 ds-space-y-6">
                <h2 className="ds-text-xl">{messages.whatIs.title}</h2>
                <div>
                  <p className="ds-inline">{messages.whatIs.message1}</p>{" "}
                  <a
                    href={metodosURL}
                    target="_blank"
                    rel="noreferrer"
                    className="ds-font-extrabold ds-underline"
                  >
                    {" "}
                    {messages.whatIs.message2}{" "}
                  </a>{" "}
                  <p className="ds-inline">{messages.whatIs.message3}</p>
                </div>
              </div>
              <div className="flex justify-center items-center ds-py-10">
                <iframe
                  height="315"
                  src={parseUrl(disenioVideo)}
                  title="YouTube video player"
                  allowFullScreen
                  className="ds-w-full md:ds-w-[500px] ds-shadow-lg"
                ></iframe>
              </div>
            </section>
          </div>
          {/* section */}
          <div id="cuantitativo" className="ds-px-10">
            <section className="ds-grid ds-grid-cols-2 ds-rounded-lg ds-p-8 ds-text-gray-700 ds-bg-light-blue">
              <div className="ds-col-span-1 ds-grid ds-place-items-center">
                <div className="ds-space-y-6">
                  <h2 className="ds-text-3xl ds-text-dark-blue">
                    {messages.quantitative.title}
                  </h2>
                  <p>{messages.quantitative.description}</p>
                </div>
              </div>
              <div className="ds-col-span-1">
                <img src="img/cuantitativa.png" alt="lupa-y-graficos" />
              </div>
              <div className="ds-col-span-2 ds-mt-3 ds-border-t-2 ds-border-solid ds-border-white">
                <p className="ds-text-center ds-my-6 ds-font-semibold ds-text-dark-blue">
                  Tipos
                </p>
              </div>
              <div className="ds-col-span-2">
                <div className="ds-flex ">
                  {messages.quantitative.types.map((item) => (
                    <div
                      key={item.title}
                      className="ds-flex-1 ds-p-3 ds-flex ds-flex-col ds-gap-3"
                    >
                      <h2 className="ds-text-center ds-font-bold ds-text-xl ds-text-dark-blue">
                        {item.title}
                      </h2>
                      <p>{item.descriptions}</p>
                      <div>
                        <p className="ds-mb-2">{item.requirementsTitle}</p>
                        <ul className="ds-list-disc ds-list-inside">
                          {item.requirements?.map((req) => (
                            <li key={req}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="ds-mb-2">{item.typesTitle}</p>
                        <div className="ds-space-y-2">
                          {item.types?.map((t1) => (
                            <details key={t1.title}>
                              <summary className="ds-cursor-pointer">
                                {t1.title}
                              </summary>
                              <div className="ds-pl-4">
                                {t1.text}

                                <p>{t1.typesTitle}</p>
                                <ul className="ds-list-disc ds-list-inside">
                                  {t1.types?.map((t2) => (
                                    <li key={t2}>{t2}</li>
                                  ))}
                                </ul>
                                <p className="ds-mt-3">Ejemplo: {t1.example}</p>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ds-col-span-2 ds-mt-3 ds-border-t-2 ds-border-solid ds-border-white">
                <div className="ds-flex ds-flex-col ds-items-center">
                  <p className="ds-text-center ds-my-6 ds-font-semibold ds-text-dark-blue">
                    {messages.symbolism.title}
                  </p>
                  <img
                    src="img/simbol-book.png"
                    alt="simbologia"
                    className="ds-w-4/5"
                  />
                </div>
              </div>
              <div className="ds-col-span-2 ds-mt-3 ds-border-t-2 ds-border-solid ds-border-white">
                <div className="ds-flex ds-flex-col ds-items-center">
                  <p className="ds-text-center ds-my-6 ds-font-semibold ds-text-dark-blue">
                    {messages.experimentStepsTitle}
                  </p>
                  <div className="ds-flex">
                    <div className="ds-flex-1 ds-grid ds-place-items-center">
                      <ul className="ds-list-inside ds-space-y-1">
                        {messages.experimentSteps.map((step) => (
                          <li key={step} className="ds-list-decimal">
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="ds-flex-1 ds-flex ds-justify-center">
                      <img
                        src="img/experimento-steps.jpg"
                        alt="experimento"
                        className="ds-min-w-72 ds-w-3/5 ds-h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* section */}
          <div id="cualitativo" className="ds-px-10">
            <section className="ds-grid ds-grid-cols-2 ds-rounded-lg ds-p-8 ds-text-gray-700 ds-bg-light-blue">
              <div className="ds-col-span-1 ds-grid ds-place-items-center">
                <div className="ds-space-y-6">
                  <h2 className="ds-text-3xl ds-text-dark-blue">
                    {messages.qualitative.title}
                  </h2>
                  <p>{messages.qualitative.description}</p>
                </div>
              </div>
              <div className="ds-col-span-1">
                <img src="img/cualitativa1.png" alt="lupa-y-graficos" />
              </div>
              <div className="ds-col-span-2 ds-mt-3 ds-border-t-2 ds-border-solid ds-border-white">
                <p className="ds-text-center ds-my-6 ds-font-semibold ds-text-dark-blue">
                  Tipos
                </p>
              </div>
              <div className="ds-col-span-2">
                <div className="ds-grid ds-grid-cols-6">
                  {messages.qualitative.types.map((item, index) => (
                    <div
                      key={item.title}
                      className="ds-col-span-2 ds-flex-1 ds-p-3 ds-flex ds-flex-col ds-gap-3"
                      style={{
                        gridColumnStart:
                          index === messages.qualitative.types.length - 2
                            ? "2"
                            : undefined,
                      }}
                    >
                      <h2 className="ds-text-center ds-font-bold ds-text-xl ds-text-dark-blue">
                        {item.title}
                      </h2>
                      <p>{item.descriptions}</p>
                      <p className="ds-mt-3">Ejemplo: {item.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          {/* section */}
          <div id="mixed" className="ds-px-10">
            <section className="ds-grid ds-grid-cols-2 ds-rounded-lg ds-p-8 ds-text-gray-700 ds-bg-light-blue">
              <div className="ds-col-span-1 ds-grid ds-place-items-center">
                <div className="ds-space-y-6">
                  <h2 className="ds-text-3xl ds-text-dark-blue">
                    {messages.mixed.title}
                  </h2>
                  <p>{messages.mixed.description}</p>
                </div>
              </div>
              <div className="ds-col-span-1">
                <img src="img/mixto1.png" alt="lupa-y-graficos" />
              </div>
              <div className="ds-col-span-2 ds-mt-3 ds-border-t-2 ds-border-solid ds-border-white">
                <p className="ds-text-center ds-my-6 ds-font-semibold ds-text-dark-blue">
                  Tipos
                </p>
              </div>
              <div className="ds-col-span-2">
                <div className="ds-flex ">
                  {messages.mixed.types.map((item) => (
                    <div
                      key={item.title}
                      className="ds-flex-1 ds-p-3 ds-flex ds-flex-col ds-gap-3"
                    >
                      <h2 className="ds-text-center ds-font-bold ds-text-xl ds-text-dark-blue">
                        {item.title}
                      </h2>
                      <p>{item.descriptions}</p>
                      <p className="ds-mt-3">Ejemplo: {item.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          {/* section */}
          <div id="instrumentos" className="ds-px-10">
            <section className="ds-flex ds-flex-col ds-rounded-lg ds-px-8 ds-py-10 ds-text-gray-700 ds-bg-light-blue">
              <div className="ds-max-w-[900px] ds-mx-auto">
                <div className="ds-col-span-1 ds-flex ds-place-items-center">
                  <div className="ds-space-y-6">
                    <h2 className="ds-text-3xl ds-text-dark-blue">
                      {messages.complement.title}
                    </h2>
                    <p>{messages.complement.message}</p>
                  </div>
                  <div className="ds-col-span-1 ds-flex ds-justify-center">
                    <img
                      src="img/datos.jpg"
                      alt="lupa-y-graficos"
                      className="ds-w-3/5"
                    />
                  </div>
                </div>
                <div className="ds-col-span-2 ds-space-y-5">
                  <div className="ds-flex ds-flex-col ds-gap-3">
                    <h2 className="ds-font-bold ds-text-xl ds-text-dark-blue">
                      {messages.complement.tecnicas.title}
                    </h2>
                    <p>{messages.complement.tecnicas.message}</p>
                  </div>
                  <div className="ds-flex ds-flex-col ds-gap-3">
                    <h2 className="ds-font-bold ds-text-xl ds-text-dark-blue">
                      {messages.complement.instrumentos.title}
                    </h2>
                    <p>{messages.complement.instrumentos.message}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* section */}
          <div className="">
            <section className="ds-flex ds-flex-col ds-items-center ds-py-8 ds-bg-medium-blue">
              <div className="ds-w-4/5 ds-space-y-10 ds-text-gray-700">
                <div className="ds-space-y-4">
                  <h2 className="ds-text-xl">{messages.conclusionTitle}</h2>
                  <p>{messages.conclusion}</p>
                </div>
                <div className="ds-space-y-4">
                  <h2 className="ds-text-xl">{messages.referencesTitle}</h2>
                  <ul className="ds-space-y-3">
                    <li>
                      {messages.references[1]}
                      <a
                        href={messages.references[11]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {messages.references[11]}
                      </a>
                    </li>
                    <li>
                      {messages.references[2]}
                      <a
                        href={messages.references[22]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {messages.references[22]}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ds-space-y-4">
                  <h2 className="ds-text-xl">{messages.contacto}</h2>
                  Correo: <a href={"mailto:" + mail1}>{mail1}</a>
                  {" - "}
                  <a href={"mailto:" + mail2}>{mail2}</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
