import ExpressoTradicional from "../../assets/coffee/Type=Expresso.png";
import ExpressoAmericano from "../../assets/coffee/Type=Americano.png";
import ExpressoCremoso from "../../assets/coffee/Type=Expresso Cremoso.png";
import ExpressoGelado from "../../assets/coffee/Type=Café Gelado.png";
import CafeComLeite from "../../assets/coffee/Type=Café com Leite.png";
import Latte from "../../assets/coffee/Type=Latte.png";
import Capuccino from "../../assets/coffee/Type=Capuccino.png";
import Macchiato from "../../assets/coffee/Type=Macchiato.png";
import Mocaccino from "../../assets/coffee/Type=Macaccino.png";
import ChocolateQuente from "../../assets/coffee/Type=Chocolate Quente.png";
import Cubano from "../../assets/coffee/Type=Cubano.png";
import Havaiano from "../../assets/coffee/Type=Havaiano.png";
import Arabe from "../../assets/coffee/Type=Árabe.png";
import Irlandes from "../../assets/coffee/Type=Irlandês.png";

import { CardCoffee } from "../CardCoffee";
import { CoffeeCardsContainer } from "./styles";

export function CoffeeListContainer() {
  return (
    <CoffeeCardsContainer>
      <CardCoffee
        title="Expresso Tradicional"
        description="O tradicional café feito com água quente e grãos moídos"
        image={ExpressoTradicional}
      />

      <CardCoffee
        title="Expresso Americano"
        description="Expresso diluído, menos intenso que o tradicional"
        image={ExpressoAmericano}
      />

      <CardCoffee
        title="Expresso Cremoso"
        description="Café expresso tradicional com espuma cremosa"
        image={ExpressoCremoso}
      />

      <CardCoffee
        title="Expresso Gelado"
        description="Bebida preparada com café expresso e cubos de gelo"
        image={ExpressoGelado}
      />

      <CardCoffee
        title="Café com Leite"
        description="Meio a meio de expresso tradicional com leite vaporizado"
        image={CafeComLeite}
      />

      <CardCoffee
        title="Latte"
        description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
        image={Latte}
      />

      <CardCoffee
        title="Capuccino"
        description="Bebida com canela feita de doses iguais de café, leite e espuma"
        image={Capuccino}
      />

      <CardCoffee
        title="Macchiato"
        description="Café expresso misturado com um pouco de leite quente e espuma"
        image={Macchiato}
      />

      <CardCoffee
        title="Mocaccino"
        description="Café expresso com calda de chocolate, pouco leite e espuma"
        image={Mocaccino}
      />

      <CardCoffee
        title="Chocolate Quente"
        description="Bebida feita com chocolate dissolvido no leite quente e café"
        image={ChocolateQuente}
      />

      <CardCoffee
        title="Cubano"
        description="Drink gelado de café expresso com rum, creme de leite e hortelã"
        image={Cubano}
      />

      <CardCoffee
        title="Havaiano"
        description="Bebida adocicada preparada com café e leite de coco"
        image={Havaiano}
      />

      <CardCoffee
        title="Árabe"
        description="Bebida preparada com grãos de café árabe e especiarias"
        image={Arabe}
      />

      <CardCoffee
        title="Irlandes"
        description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
        image={Irlandes}
      />
    </CoffeeCardsContainer>
  );
}
