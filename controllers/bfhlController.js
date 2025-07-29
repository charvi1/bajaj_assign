exports.processData = (req, res) => {
    try {
        const { data } = req.body;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: 'Invalid input data' });
        }

        
        const userId = `charvi_bansal_11062004`;
        const email = 'charvi236.be22@chitkara.edu.in';
        const rollNumber = '2210990236';

        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;

        data.forEach(item => {
            if (/^\d+$/.test(item)) {
                parseInt(item) % 2 === 0 ? evenNumbers.push(item) : oddNumbers.push(item);
                sum += parseInt(item);
            } else if (/^[a-zA-Z]+$/.test(item)) {
                alphabets.push(item.toUpperCase());
            } else {
                specialCharacters.push(item);
            }
        });

        const concatString = alphabets.join('').split('').reverse()
            .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');

        const response = {
            is_success: true,
            user_id: userId,
            email: email,
            roll_number: rollNumber,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: sum.toString(),
            concat_string: concatString
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ is_success: false, message: 'Internal Server Error' });
    }
};
