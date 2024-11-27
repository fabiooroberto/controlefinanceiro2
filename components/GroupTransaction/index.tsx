import { Page } from '@/styled/global';
import * as S from './styled';
import { Transaction } from '@/Models/Transaction';
import { useEffect } from 'react';
import ItemTransactionMin from '@/components/ItemTransaction';

export interface GroupTransactionMinProps {
  data: Transaction[];
  month: string;  
}

export default function GroupTransactionMin(props: GroupTransactionMinProps) {


  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  return (
    <Page>
      <S.Title>{props.month}</S.Title>
      {props.data.map((item, index) => (
        <ItemTransactionMin
          title={item.description}
          id={item.id}
          description={item.description}
          amount={item.amount}
          date={item.date}
          type={item.transactionType === "receita"}
          disabledLine={index === props.data.length - 1}
          key={item.id}
        />
      ))}
    </Page>
  );
}