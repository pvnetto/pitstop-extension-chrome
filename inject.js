(function() {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function () {
            function findCentralBtn() {
                var newSectionContainer = document.querySelector('.section-component.vehicles-new');
                var centralBtn = newSectionContainer.querySelector('.vehicles-new__button-whatsapp');
                return centralBtn;
            }

            var usedSection = document.querySelector('.section-component.used-models');
            if(!usedSection) return;

            var btnContainer = usedSection.querySelector('.container.used-models__ctas');
            var newBtn = findCentralBtn().cloneNode(true);
            newBtn.style['margin-left'] = '30px';

            $(newBtn).on('click', function(e) {
                var s = document.querySelector(".header-conversion-form-whatsapp-modal");
                s.innerHTML = "";
                
                var r = this.dataset,
                    a = r.units ? JSON.parse(r.units) : [],
                    o = r.product,
                    t = r.channel,
                    i = r.category,
                    l = r.brand,
                    n = r.link,
                    c = "true" == s.dataset.whatsappResponder,
                    d = JSON.parse(r.showUnits),
                    u = !!JSON.parse(r.showCpf);

                render(h(window.WhatsAppFormModal, {
                    modalId: "header-conversion-form-whatsapp-modal",
                    open: !0,
                    units: a,
                    product: o,
                    channel: t,
                    category: i,
                    brand: l,
                    link: n,
                    whatsAppResponder: c,
                    showUnits: d,
                    showCpf: u
                }), s)
            });

            btnContainer.append(newBtn);
        }, 0);
    });
})();