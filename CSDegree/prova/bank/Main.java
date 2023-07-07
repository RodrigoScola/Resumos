import java.util.Scanner;

class NumException extends Exception {
    public void impMsg(String message) {
        System.out.println(message);
    }
}

interface Verifica {
    public void validar();
}

class Endereco {
    private int num;
    private String rua;

    public int getNumero() {
        return this.num;
    }

    public void setNumero(int numero) {
        this.num = numero;
    }

    public String getRua() {
        return this.rua;
    }

    public void setRua(String novaRua) {
        this.rua = novaRua;
    }

}

abstract class ClienteBanco implements Verifica {
    private int numeroConta;
    private String nome;
    private Endereco ender;

    abstract void verifDoc();

    public int getNumeroConta() {
        return this.numeroConta;
    }

    public void setNumeroConta(int novoNumeroConta) throws NumException {
        if (novoNumeroConta <= 0) {
            throw new NumException();
        }
        this.numeroConta = novoNumeroConta;
    }

    public Endereco getEndereco() {
        return this.ender;
    }

    public void setEndereco(Endereco ender) {
        this.ender = ender;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String novoNome) {
        this.nome = novoNome;
    }

    @Override
    public void validar() {
        if (this.numeroConta % 2 == 0) {
            System.out.println("Par");
        } else {
            System.out.println("Impar");
        }
    }
}

class PessoaFisica extends ClienteBanco {
    private int cpf;

    public int getCpf() {
        return this.cpf;
    }

    public void setCpf(int cpf) {
        this.cpf = cpf;
    }

    @Override
    void verifDoc() {
        if (this.cpf >= 10 && this.cpf <= 20) {
            System.out.println("CPF válido");
        } else {
            System.out.println("CPF inválido");
        }
    }
}

class PessoaJuridica extends ClienteBanco {
    private int cnpj;
    private PessoaFisica responsavel;

    public PessoaFisica getResponsavel() {
        return this.responsavel;
    }

    public void setResponsavel(PessoaFisica resp) {
        this.responsavel = resp;
    }

    public int getCnpj() {
        return this.cnpj;
    }

    public void setCnpj(int cnpj) {
        this.cnpj = cnpj;
    }

    @Override
    void verifDoc() {
        if (this.responsavel.getNome().length() >= 30) {
            System.out.println("Nome inválido para Responsável");
        } else {
            System.out.println("Nome válido para Responsável");
        }

    }
}

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        PessoaJuridica pessoaJuridica = new PessoaJuridica();

        int numeroConta = input.nextInt();

        try {
            pessoaJuridica.setNumeroConta(numeroConta);
        } catch (NumException e) {
            e.impMsg("ERRO: Não pode haver Número Negativo para conta!");
        }
        int cnpj = input.nextInt();
        pessoaJuridica.setCnpj(cnpj);
        String rua = input.nextLine();
        pessoaJuridica.getEndereco().setRua(rua);
        int cpf = input.nextInt();
        pessoaJuridica.getResponsavel().setCpf(cpf);
        String nome = input.nextLine();
        pessoaJuridica.getResponsavel().setNome(nome);

        input.close();
        System.out.println(pessoaJuridica.getNumeroConta());
        pessoaJuridica.validar();

        System.out.println(pessoaJuridica.getCnpj());
        System.out.println(pessoaJuridica.getEndereco().getRua());

        System.out.println(pessoaJuridica.getResponsavel().getCpf());
        pessoaJuridica.getResponsavel().validar();
        System.out.println(pessoaJuridica.getResponsavel().getNome());
        pessoaJuridica.verifDoc();

    }
}