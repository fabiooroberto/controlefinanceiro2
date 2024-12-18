import HeaderMin from '@/components/Header';
import { Container, Page } from '@/styled/global';


export default function PaymentPage() {
  return (
    <Page>
      <Container>
        <HeaderMin
          title="Payment"
          subTitle="Subtitle" />
      </Container>
    </Page>
  );
}
