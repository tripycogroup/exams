import figlet from 'figlet';
import { gray, green } from 'kleur';

export const drawTitle = (text: string): void => {
  console.log('\n');
  console.log(
    gray().bold(
      figlet.textSync(text, {
        font: 'Graffiti',
      })
    )
  );
  console.log('\n');
};

export const toCurrency = (amount: number): string => green(`${amount.toFixed(2)}$`);
