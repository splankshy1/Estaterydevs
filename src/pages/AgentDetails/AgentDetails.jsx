

import { Link, useParams } from "react-router-dom";
import agents from "../../data/agents";
import houses from "../../data/houses";
import "./AgentDetails.css";

const Socials = () => <div className="agent-socials"><span>♥</span><span>f</span><span>◎</span><span>▶</span></div>;

export const AgentDetailsPage = () => {
  const { id } = useParams();
  const agent = agents.find((item) => item.id === Number(id)) || agents[0];

  return (
    <main className="agent-details">
      <div className="agent-details__crumbs"><Link to="/">Home</Link><b>›</b><Link to="/agents">Agents</Link><b>›</b><em>{agent.name}</em></div>
      <div className="agent-details__content">
        <h1>{agent.name}</h1>
        <div className="agent-details__layout">
          <section>
            <div className="agent-profile">
              <img src={agent.image} alt={agent.name} />
              <div>
                <h2>{agent.name}</h2>
                <div className="agent-profile__facts">
                  <p>Agent License: {agent.license}</p><p>Address: {agent.address}</p>
                  <p>Mobile: {agent.phone}</p><p>Email: {agent.email}</p>
                </div>
                <Socials />
              </div>
            </div>
            <article className="agent-about"><h3>About</h3><p>{agent.bio}</p></article>
            <div className="agent-tabs"><button className="active">All</button><button>For Rent</button><button>For Sale</button></div>
            <section className="agent-properties">
              {houses.slice(0, 3).map((house) => <PropertyCard house={house} key={house.id} />)}
            </section>
          </section>
          <ContactCard />
        </div>
      </div>
    </main>
  );
};

function PropertyCard({ house }) {
  return <article className="agent-property-card">
    <div className="agent-property-card__image"><img src={house.image} alt={house.title} /><span>{house.status}</span></div>
    <div className="agent-property-card__body"><h3>{house.title}</h3><p>⌾ {house.location}</p><div><span>♧ {house.beds}</span><span>♨ {house.baths}</span><span>▣ {house.sqft} sqft</span></div><footer><strong>{house.price}</strong><small>/Month</small><Link to={`/listings/${house.id}`}>View Detail</Link></footer></div>
  </article>;
}

function ContactCard() {
  return <aside className="agent-contact"><h2>Contact</h2><input placeholder="Name" /><input placeholder="Phone" /><input placeholder="Email" /><textarea rows="3" placeholder="Message" /><div><button className="agent-contact__call">Call Now</button><button className="agent-contact__send">Send A Message</button></div></aside>;
}
