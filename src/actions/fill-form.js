(() => {
    // faker.setLocale("pt_BR");

    const getType = (field) => {
        if (field.name.includes('cpf')) return 'cpf';
        if (field.name.includes('name')) return 'name';
        if (field.name.includes('last') || field.name.includes('last_name')) return 'last_name';
        if (field.name.includes('phone') || field.name.includes('tel')) return 'phone';
        return field.type;
    }

    const generateCPF = () => {
        const r = () => Math.floor(Math.random() * 9);
        let cpf = `${r()}${r()}${r()}.${r()}${r()}${r()}.${r()}${r()}${r()}-${r()}${r()}`;
        return cpf;
    }

    const info = {
        'name': () => `Autoforce Teste - ${faker.name.findName()}`,
        'last_name': faker.name.lastName,
        'cpf': generateCPF,
        'phone': () => faker.phone.phoneNumber('(00)9####-####'),
        'email': () => `teste-${faker.random.number({ min: 100000, max: 999999 })}@autoforce.com`,
        'text': faker.lorem.word,
    }

    const fill = (field) => {
        const fieldType = getType(field);
        const fieldInfo = info[fieldType] ? info[fieldType]() : '';
        field.value = fieldInfo;
    }

    // const hoveredElements = document.querySelectorAll(':hover');
    const hoveredForm = [...solSelection.rightClicked].find(item => item.tagName.toLowerCase() === 'form');

    if (hoveredForm) {
        const fields = hoveredForm.querySelectorAll('input');
        fields.forEach(field => fill(field));
    }
})();