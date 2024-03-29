function Header({ data, subBg }) {
  return (
    <header
      className={`page-header section-padding pb-0 header-cont ${
        subBg ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h6 className="sub-title">{data.subTitle}</h6>
              <h1 className="fz-55 header-title" style={{ marginTop: "80px" }}>
                {data.title}
              </h1>
              <div className=" offset-lg-4">
                <div className=" mt-30">
                  <p className="header-content">
                    CreateAbit designs is a renowned name in the digital world.
                    We are a reputed marketing and branding agency based in
                    Washington DC metro area. Our extensive history, rich
                    experience, and excellent track record make us a more
                    reliable choice when it comes to designing and marketing
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-5 offset-lg-4">
            <div className="text mt-30">
              <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="pb-0 main-marq xlrg section-padding marq-text">
        <div className="slide-har st1">
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>{data.text}</h4>
              </div>
            ))}
          </div>
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>{data.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
