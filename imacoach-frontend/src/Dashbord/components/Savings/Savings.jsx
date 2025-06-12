 import { savings } from "../../data/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Savings.css";

const Savings = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Savings</h3>
        <button className="grid-c-title-icon" aria-label="Ajouter">
          <img src={iconsImgs.plus} alt="Icône ajouter" />
        </button>
      </div>

      <div className="grid-c6-content">
        <div className="grid-items">
          {savings.map((saving) => {
            // Calcul dynamique du pourcentage de progression
            const total = Number(saving.saving_amount);
            const left = Number(saving.amount_left);
            const progress = total > 0 ? ((total - left) / total) * 100 : 0;

            return (
              <div className="grid-item" key={saving.id}>
                <div className="grid-item-top">
                  <div className="grid-item-top-l">
                    <div className="avatar img-fit-cover">
                      <img src={personsImgs.person_one} alt="Photo utilisateur" />
                    </div>
                    <p className="text text-silver-v1">{saving.title}</p>
                  </div>
                  <div className="grid-item-top-r">
                    <span className="text-silver-v1">$ {saving.saving_amount}</span>
                  </div>
                </div>

                <div className="grid-item-bottom">
                  <div className="grid-item-badges">
                    <span className="grid-item-badge">Date taken: {saving.date_taken}</span>
                    <span className="grid-item-badge">Amount left: $ {saving.amount_left}</span>
                  </div>
                  <div className="grid-item-progress">
                    <div
                      className="grid-item-fill"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Savings;
