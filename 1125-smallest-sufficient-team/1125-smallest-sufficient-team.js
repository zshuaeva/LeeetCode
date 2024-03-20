var smallestSufficientTeam = function(req_skills, people) {
    const n = req_skills.length;
    const skillIndex = {};
    for (let i = 0; i < n; i++) {
        skillIndex[req_skills[i]] = i;
    }

    const dp = new Map();

    dp.set(0, []);

    for (let i = 0; i < people.length; i++) {
        const personSkills = people[i];
        let mask = 0;
        for (const skill of personSkills) {
            mask |= (1 << skillIndex[skill]);
        }

        const keys = Array.from(dp.keys());
        for (const key of keys) {
            const combinedMask = key | mask;
            if (!dp.has(combinedMask) || dp.get(combinedMask).length > dp.get(key).length + 1) {
                const newTeam = [...dp.get(key), i];
                dp.set(combinedMask, newTeam);
            }
        }
    }

    return dp.get((1 << n) - 1);
};