import React from 'react';
import '../App.css';


function Articles() {
    return (
        <li class="cards-item half">
            <div class="card">
              <div class="card-content">
                <div class="card-image landscape"></div>
                <div class="card-container">
                  <div class="card-title">Pop-up gochujang artisan activated charcoal bushwick irony raclette</div>
                  <p class="card-text">Listicle hexagon helvetica tumeric shabby chic cloud bread XOXO four loko umami crucifix hoodie forage bushwick. Mlkshk cliche everyday carry sartorial truffaut portland prism four loko cronut. Tousled locavore tote bag food truck blue bottle shaman...</p>
                  <div class="btn-block">
                    <button class="btn third">
                      <span role="img" aria-label="Add to Album">➕</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Email">✉️</span>
                    </button>
                    <button class="btn third">
                      <span role="img" aria-label="Favorite">⭐</span>
                    </button>
                  </div>
                </div>
                <div class="btn-block">
                  <button class="btn full">
                    <span role="img" aria-label="Comment">💬</span> 
                    <span class="small">[100]</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
    )
}

export default Articles;