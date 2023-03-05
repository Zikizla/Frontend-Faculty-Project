const assert = chai.assert;
const zadaci_testni_div = document.createElement('div');
const vjezbe_testni_div = document.createElement('div');

describe('Spirala 4', function() {
    beforeEach(function() {
        // Funkcija koja se poziva prije svakog testa, kako bi se obrisao innerHTML divova
        zadaci_testni_div.innerHTML = '';
        vjezbe_testni_div.innerHTML = '';
    });

    afterEach(function() {
        // Funkcija koja se poziva poslije svakog testa, kako bi se obrisao innerHTML divova
        zadaci_testni_div.innerHTML = '';
        vjezbe_testni_div.innerHTML = '';
    });

    describe('Datoteka "spirala3.js" | Funkcija "iscrtajZadatke"', function() {
        it('Poziv funkcije bez parametara (očekivana su dva)', function() {
            iscrtajZadatke();
            assert.equal( 0, zadaci_testni_div.children.length );
        });

        it('Poziv funkcije sa jednim parametrom, jedan neispravan (očekivana su dva)', function() {
            iscrtajZadatke(2022);
            assert.equal( 0, zadaci_testni_div.children.length );
        });

        it('Poziv funkcije sa jednim parametrom, jedan ispravan (očekivana su dva)', function() {
            iscrtajZadatke(zadaci_testni_div);
            assert.equal( 0, zadaci_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, prvi neispravan (očekivana su dva)', function() {
            iscrtajZadatke(2022, 10);
            assert.equal( 0, zadaci_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, drugi neispravan (očekivana su dva)', function() {
            iscrtajZadatke(zadaci_testni_div, zadaci_testni_div);
            assert.equal( 0, zadaci_testni_div.children.length );
        });

        it('Broj zadataka 0, roditelj element bi trebao imati samo jedno dijete', function() {
            iscrtajZadatke(zadaci_testni_div, 0);
            assert.isTrue( zadaci_testni_div.children.length === 1 );
        });

        it('Broj zadataka 0, innerHTML jedinog childa bi trebao biti "NEMA ZADATAKA"', function() {
            iscrtajZadatke(zadaci_testni_div, 0);
            const zadaci_testni_div_djeca = zadaci_testni_div.children;
            const inner_html_prvog_djeteta = zadaci_testni_div_djeca[0].innerHTML;
            assert.equal('NEMA ZADATAKA', inner_html_prvog_djeteta );
        });

        it('Broj zadataka 0, klasa jedinog childa bi trebala biti "nema-zadataka"', function() {
            iscrtajZadatke(zadaci_testni_div, 0);
            const zadaci_testni_div_djeca = zadaci_testni_div.children;
            const class_name_prvog_djeteta = zadaci_testni_div_djeca[0].className;
            assert.equal('nema-zadataka', class_name_prvog_djeteta );
        });

        it('Broj zadataka -1 (negativan), roditelj element bi trebao imati samo jedno dijete (test uključuje innerHTML i className)', function() {
            iscrtajZadatke(zadaci_testni_div, 0);
            const zadaci_testni_div_djeca = zadaci_testni_div.children;
            const inner_html_prvog_djeteta = zadaci_testni_div_djeca[0].innerHTML;
            const class_name_prvog_djeteta = zadaci_testni_div_djeca[0].className;
            assert.isTrue( zadaci_testni_div.children.length === 1 && inner_html_prvog_djeteta === 'NEMA ZADATAKA' && class_name_prvog_djeteta === 'nema-zadataka' );
        });

        it('Broj zadataka 5, roditelj element bi trebao imati 5 djece', function() {
            iscrtajZadatke(zadaci_testni_div, 5);
            assert.isTrue( zadaci_testni_div.children.length === 5 );
        });

        it('Broj zadataka 2022, roditelj element bi trebao imati 2022 djece', function() {
            iscrtajZadatke(zadaci_testni_div, 2022);
            assert.isTrue( zadaci_testni_div.children.length === 2022 );
        });

        it('Dupli poziv funkcije sa brojem zadataka 5, roditelj element bi trebao imati 5 djece, a ne 10 (isNotTrue assert)', function() {
            iscrtajZadatke(zadaci_testni_div, 5);
            iscrtajZadatke(zadaci_testni_div, 5);
            assert.isNotTrue( zadaci_testni_div.children.length === 10 );
        });

        it('Dupli poziv funkcije sa brojem zadataka 5, roditelj element bi trebao imati 5 djece, a ne 10 (isTrue assert)', function() {
            iscrtajZadatke(zadaci_testni_div, 5);
            iscrtajZadatke(zadaci_testni_div, 5);
            assert.isTrue( zadaci_testni_div.children.length === 5 );
        });

        it('Broj zadataka 5, testiranje labela, labele bi trebale biti "ZadatakX" gdje je X={1,2,3,4,5}', function() {
            iscrtajZadatke(zadaci_testni_div, 5);
            const zadaci_testni_div_djeca = zadaci_testni_div.children;
            let ispravno = true;
            for(let i = 1; i <= zadaci_testni_div_djeca.length; i++) {
                if( zadaci_testni_div_djeca[i-1].innerHTML !== 'ZADATAK ' + i ) {
                    ispravno = false;
                    break;
                }
            }
            assert.isTrue( ispravno );
        });

        it('Broj zadataka 5, testiranje className, sve bi trebale biti identične', function() {
            iscrtajZadatke(zadaci_testni_div, 5);
            const zadaci_testni_div_djeca = zadaci_testni_div.children;
            let ispravno = true;
            for(let i = 1; i <= zadaci_testni_div_djeca.length; i++) {
                if( zadaci_testni_div_djeca[i-1].className !== 'zadatak') {
                    ispravno = false;
                    break;
                }
            }
            assert.isTrue( ispravno );
        });
    });

    describe('Datoteka "spirala3.js" | Funkcija "iscrtajVjezbu"', function() {
        it('Poziv funkcije bez parametara (očekivana su dva)', function(){
            iscrtajVjezbu();
            assert.equal(0, vjezbe_testni_div.children.length);
        });

        it('Poziv funkcije sa jednim parametrom, jedan neispravan (očekivana su dva)', function() {
            iscrtajVjezbu(2022);
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Poziv funkcije sa jednim parametrom, jedan ispravan (očekivana su dva)', function() {
            iscrtajVjezbu(vjezbe_testni_div);
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, prvi neispravan (očekivana su dva)', function() {
            iscrtajVjezbu(2022, {
                brojVjezbi: 3,
                brojZadatakaPoVjezbi: [1,2,3]
            });
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, drugi neispravan (očekivana su dva)', function() {
            iscrtajVjezbu(vjezbe_testni_div, vjezbe_testni_div);
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, drugom parametru fali polje "brojVjezbi" (očekivana su dva)', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojZadatakaPoVjezbi: [1,2,3]
            });
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, drugom parametru fali polje "brojZadatakaPoVjezbi" (očekivana su dva)', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 3
            });
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, drugom parametru tip "brojVjezbi" nije cijeli broj (očekivana su dva)', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: '3',
                brojZadatakaPoVjezbi:  [1,2,3]
            });
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Poziv funkcije sa dva parametra, drugom parametru tip "brojZadatakaPoVjezbi" nisu svi cijeli brojevi (očekivana su dva)', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: '3',
                brojZadatakaPoVjezbi:  [1,'2',3]
            });
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Parametri ispravni, broj vježbi nije jednak broju broja zadataka po vježbi', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 3,
                brojZadatakaPoVjezbi: [1,2]
            });
            assert.equal( 0, vjezbe_testni_div.children.length );
        });

        it('Broj zadataka 0, roditelj element nema djece', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 0,
                brojZadatakaPoVjezbi: []
            });
            assert.isTrue( vjezbe_testni_div.children.length === 0 )
        });

        it('Broj vježbi 3, roditelj element ima 3 djece', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 3,
                brojZadatakaPoVjezbi: [1,2,3]
            });
            assert.isTrue( vjezbe_testni_div.children.length === 3 )
        });

        it('Broj vježbi 2022, roditelj element ima 2022 djece', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 2022,
                brojZadatakaPoVjezbi: new Array(2022).fill(0)
            });
            assert.isTrue( vjezbe_testni_div.children.length === 2022 )
        });

        it('Nijedna vježba nije pritisnuta, zadaci nisu prikazani', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: [1,2,3,4,0]
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            let ispravno = true;
            for(let i = 0; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].children.length === 2 ) {
                    const zadaci_div = vjezbe_testni_div_djeca[i].children[1];
                    if( zadaci_div.children.length !== 0 ) {
                        ispravno = false;
                        break;
                    }
                }
            }
            assert.isTrue( ispravno );
        });

        it('Jedna vježba pritisnuta, ostale nisu', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: [1,2,3,4,0]
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            vjezbe_testni_div_djeca[0].children[0].click();
            let prvaOtvorena = vjezbe_testni_div_djeca[0].children[1].children.length !== 0;
            let ostaleZatvorene = true;
            for(let i = 1; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].children.length === 2 ) {
                    const zadaci_div = vjezbe_testni_div_djeca[i].children[1];
                    if( zadaci_div.children.length !== 0 ) {
                        ostaleZatvorene = false;
                        break;
                    }
                }
            }
            assert.isTrue( prvaOtvorena && ostaleZatvorene );
        });

        it('Jedna od vježbi ima 0 zadataka, prisutna "NEMA ZADATAKA" poruka (Sve pritisnute)', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: [1,2,3,4,0]
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            let ispravno = false;
            for(let i = 0; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].children.length === 2 ) {
                    const zadaci_div = vjezbe_testni_div_djeca[i].children[1];
                    // Da bi se prikazali i renderovali svi zadaci potrebno je kliknuti na vježbu
                    vjezbe_testni_div_djeca[i].children[0].click();
                    if( zadaci_div.children.length && zadaci_div.children[0].innerHTML === 'NEMA ZADATAKA' ) {
                        ispravno = true;
                        break;
                    }
                }
            }
            assert.isTrue( ispravno );
        });

        it('Sve vježbe imaju 0 zadataka, prisutna "NEMA ZADATAKA" poruka u svim zadacima nakon klika (Sve pritisnute)', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: new Array(5).fill(0)
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            let ispravno = true;
            for(let i = 0; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].children.length === 2 ) {
                    const zadaci_div = vjezbe_testni_div_djeca[i].children[1];
                    // Da bi se prikazali i renderovali svi zadaci potrebno je kliknuti na vježbu
                    vjezbe_testni_div_djeca[i].children[0].click();
                    if( zadaci_div.children.length && zadaci_div.children[0].innerHTML !== 'NEMA ZADATAKA' ) {
                        ispravno = false;
                        break;
                    }
                } else {
                    ispravno = false;
                }
            }
            assert.isTrue( ispravno );
        });

        it('Sve vježbe posjeduju ispravan className za kontejner ("vjezbaKontejner")', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: new Array(5).fill(0)
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            let ispravno = true;
            for(let i = 0; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].className !== 'vjezbaKontejner') {
                    ispravno = false;
                    break;
                }
            }
            assert.isTrue( ispravno );
        });

        it('Sve vježbe imaju 2 djece u kontejneru', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: new Array(5).fill(0)
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            let ispravno = true;
            for(let i = 0; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].children.length !== 2) {
                    ispravno = false;
                    break;
                }
            }
            assert.isTrue( ispravno );
        });

        it('Sve vježbe posjeduju ispravan className za vježbu ("vjezba")', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: new Array(5).fill(0)
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            let ispravno = true;
            for(let i = 0; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].children[0].className !== 'vjezba') {
                    ispravno = false;
                    break;
                }
            }
            assert.isTrue( ispravno );
        });

        it('Drugi parametar ima dodatnih polja u JSON objektu, funkcija idalje radi ispravno', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 2022,
                brojZadatakaPoVjezbi: new Array(2022).fill(0),
                neupotrijebljenParametar1: 1,
                neupotrijebljenParametar2: 2,
                neupotrijebljenParametar3: 3,
            });
            assert.isTrue( vjezbe_testni_div.children.length === 2022 )
        });

        it('Sve vježbe imaju ispravne labele', function() {
            iscrtajVjezbu(vjezbe_testni_div, {
                brojVjezbi: 5,
                brojZadatakaPoVjezbi: new Array(5).fill(0)
            });
            const vjezbe_testni_div_djeca = vjezbe_testni_div.children;
            let ispravno = true;
            for(let i = 0; i < vjezbe_testni_div_djeca.length; i++) {
                if( vjezbe_testni_div_djeca[i].children[0].innerHTML !== 'VJEŽBA ' + (i+1)) {
                    ispravno = false;
                    break;
                }
            }
            assert.isTrue( ispravno );
        });
    });
});
