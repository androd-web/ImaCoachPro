 import { subscriptions } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import "./Subscriptions.css";

const Subscriptions = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Subscriptions</h3>
        <button className="grid-c-title-icon" aria-label="Ajouter une souscription">
          <img src={iconsImgs.plus} alt="Ajouter" />
        </button>
      </div>

      <div className="grid-c5-content">
        <div className="grid-items">
          {subscriptions.map((subscription) => (
            <div className="grid-item" key={subscription.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.alert} alt="Icône alerte" />
                </div>
                <p className="text text-silver-v1">
                  {subscription.title}
                  <br />
                  <span>Échéance : {subscription.due_date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {subscription.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
