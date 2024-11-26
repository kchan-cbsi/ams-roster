export default function UserInput({handleOnChange, userInput}) {

    /**
     *         $temp = [
     *             "name"                         => $name,
     *             "country"                      => "USA",
     *             "race_skill"                   => getRand(880, 1000),
     *             "qualifying_skill"             => getRand(880, 1000),
     *             "aggression"                   => getRand(880, 1000),
     *             "defending"                    => getRand(880, 1000),
     *             "stamina"                      => ($crazy === false) ? getRand(500, 1000) : 0.001,
     *             "consistency"                  => ($crazy === false) ? getRand(500, 1000) : 0.001,
     *             "start_reactions"              => getRand(500, 1000),
     *             "tyre_management"              => getRand(500, 1000),
     *             "fuel_management"              => getRand(500, 1000),
     *             "blue_flag_conceding"          => .999,
     *             "weather_tyre_changes"         => getRand(500, 1000),
     *             "avoidance_of_mistakes"        => ($crazy === false) ? getRand(500, 1000) : 0.01,
     *             "avoidance_of_forced_mistakes" => ($crazy === false) ? getRand(500, 1000) : 0.01,
     *             "vehicle_reliability"          => getRand(800, 1000),
     *
     *         ];
      */

    return (
        <div>
            <section id={'user-input'}>
                <div className={'input-group'}>
                    <p>
                        <label>Race Skill</label>
                        <input
                            type={'number'}
                            value={userInput.raceSkill}
                            onChange={(event)=>handleOnChange('raceSkill', event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Qualifying Skill</label>
                        <input
                            type={'number'}
                            value={userInput.qualifyingSkill}
                            onChange={(event) => handleOnChange('qualifyingSkill', event.target.value)}
                        />
                    </p>
                </div>
            </section>
        </div>
    )
}