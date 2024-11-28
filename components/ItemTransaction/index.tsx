import * as S from './styled';


export type ItemTransactionMinProps = { 
  title: string;
  id: string;
  description: string;
  amount: number | string;
  date: Date;
  type: boolean;
  disabledLine: boolean;
}

export default function ItemTransactionMin(props: ItemTransactionMinProps) {
  return (
    <S.Item disabledLine={props.disabledLine}>
      <S.Content>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
      </S.Content>
      <S.Content>
        <S.AmountContainer receita={props.type}>  
          <S.Amount>{props.amount}</S.Amount>
        </S.AmountContainer>
        <S.Date>{props.date.toLocaleDateString("pt-BR")}</S.Date>
      </S.Content>
    </S.Item>
  );
}
