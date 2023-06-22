import Layout from "../components/Layout";

function Homepage() {
  return (
    <Layout title="Welcome">
      <div className="row">
        <div className="col-lg-12">
          <div className="card" style={{ maxHeight: '15rem', color: '#0a7151' }}>
            <img src="assets/img/card.jpg" className="card-img" style={{ maxHeight: '15rem' }} />
          <div className="card-img-overlay">
              <h2 className="text-center p-5" style={{ color: '#0a7151', textShadow: '0 0 5px #d4d700' }}>লতিফ এন্ড সন্স</h2>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default Homepage;