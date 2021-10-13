import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  addTransaction: () => void;
}

export function Header({ addTransaction }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={addTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}