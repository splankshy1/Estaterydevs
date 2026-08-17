

import { Link } from "react-router-dom";
import agents from "../../data/agents";
import "./AgentPage.css";

export const AgentPage = () => {
  return (
    <main className="agents-page">
      <div className="agents-page__crumbs"><span>Home</span><b>›</b><em>Agents</em></div>
      <div className="agents-page__content">
        <h1>Agents</h1>
        <div className="agents-page__toolbar">
          <form onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Search agents" placeholder="Placeholder" />
            <button type="submit">Search</button>
          </form>
          <button className="agents-page__sort" type="button">Most popular⌄</button>
        </div>
        <section className="agents-page__grid" aria-label="Agents">
          {agents.map((agent) => (
            <Link className="agent-card" to={`/agents/${agent.id}`} key={agent.id}>
              <img src={agent.image} alt={agent.name} />
              <div className="agent-card__info">
                <h2>{agent.name}</h2>
                <p>Agent License: {agent.license}</p>
                <p>Mobile: {agent.phone}</p>
              </div>
            </Link>
          ))}
        </section>
        <button className="agents-page__more" type="button">View More</button>
      </div>
    </main>
  );
};

