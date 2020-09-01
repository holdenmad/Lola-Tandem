import React from 'react';

function Interests() {
    return (
        <div>
            <label id="checkbox-group">Interests</label>
            <div role="group" aria-labelledby="checkbox-group">
                {/* New row */}
                <div className="form-row">
                    <label>
                        <input type="checkbox" name="checked" value="Sports" />
              Sports
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Teamsports" />
              TeamSports
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Extreme Sports" />
              Extreme Sports
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Skating" />
              Skating
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Running" />
              Running
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Fitness" />
              Fitness
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Yoga" />
              Yoga
            </label>
                </div>
                {/* New row */}
                <div className="form-row">
                    <label>
                        <input type="checkbox" name="checked" value="Music" />
              Music
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Concerts" />
              Concerts
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Playing Instruments" />
              Playing Instruments
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Singing" />
              Singing
            </label>
                </div>
                {/* New row */}
                <div className="form-row">
                    <label>
                        <input type="checkbox" name="checked" value="Inside Activities" />
                Inside Activities
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Video Gaming" />
                Video Gaming
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Board Gaming" />
                Board Gaming
            </label>
                </div>
                {/* New row */}
                <div className="form-row">
                    <label>
                        <input type="checkbox" name="checked" value="Culture" />
                Culture
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Museums" />
                Museums
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Reading" />
                Reading
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Movies/Cinema" />
                Movies/Cinema
            </label>
                </div>
                {/* New row */}
                <div className="form-row">
                    <label>
                        <input type="checkbox" name="checked" value="Photography" />
                Photography
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Cooking" />
                Cooking
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Painting" />
                Painting
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Travleing" />
                Traveling
            </label>
                    <label>
                        <input type="checkbox" name="checked" value="Sight Seeing" />
                Sight Seeing
            </label>
                </div>
            </div>
        </div>
    );
}

export default Interests;