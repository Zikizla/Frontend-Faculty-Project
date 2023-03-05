const iscrtajVjezbu = (vjezbe_kontejner, podaci_o_vjezbama) => {
    const broj_vjezbi = podaci_o_vjezbama.brojVjezbi;
    const broj_zadataka_po_vjezbi = podaci_o_vjezbama.brojZadatakaPoVjezbi;
    for(let i = 1; i <= broj_vjezbi; i++) {
        const vjezba_kontejner_div = document.createElement("div");
        vjezba_kontejner_div.classList.add("vjezbaKontejner")
        const vjezba_div = document.createElement("div");
        vjezba_div.classList.add("vjezba");
        vjezba_div.innerHTML = "VJEŽBA " + i;
        const zadaci_div = document.createElement("div");
        zadaci_div.classList.add("zadaciKontejner");
        iscrtajZadatke(zadaci_div, broj_zadataka_po_vjezbi[i-1]);
        vjezba_kontejner_div.appendChild(vjezba_div);
        vjezba_kontejner_div.appendChild(zadaci_div);
        vjezbe_kontejner.appendChild(vjezba_kontejner_div);
    }
}

const iscrtajZadatke = (zadaci_kontejner, broj_zadataka) => {
    for(let i = 1; i <= broj_zadataka; i++) {
        const zadatak_div = document.createElement("div");
        zadatak_div.classList.add("zadatak");
        zadatak_div.innerHTML = "ZADATAK " + i;
        zadaci_kontejner.appendChild(zadatak_div);
    }
}