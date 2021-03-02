import React from 'react';
import '../App.css';

function Comments() {
    return(
          <li class="cards-item third">
            <div class="card">
              <div class="card-content">
                <div class="card-container">
                  <p class="card-text">Put a bird on it disrupt flexitarian, keffiyeh man braid 3 wolf moon shoreditch seitan ethical DIY quinoa shaman sustainable pitchfork...</p>
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
              </div>
            </div>
          </li>
    )
}

export default Comments;









