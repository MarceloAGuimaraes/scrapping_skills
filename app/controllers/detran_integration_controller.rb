class DetranIntegrationController < ApplicationController
  before_action :set_agent

  def check_punctuation
    #detran's home page
    page = @agent.get("https://www.detran.mg.gov.br")
    #detran's section to cnh consultations
    page = @agent.get("https://www.detran.mg.gov.br/habilitacao")
    #Get in the page to check ponctuaction
    page = @agent.get("https://www.detran.mg.gov.br/habilitacao/cnh-e-permissao-para-dirigir/consulta-pontuacao")

    #Now, we will fill the form with the params
    page.forms.second.field_with(name: "data[ConsultarPontuacaoCondutor][tipo_cnh]").value = params[:cnh_type]
    page.forms.second.field_with(name: "data[ConsultarPontuacaoCondutor][numero_cnh]").value = params[:cnh_number]
    page.forms.second.field_with(name: "data[ConsultarPontuacaoCondutor][data_nascimento]").value = params[:birth_date]
    page.forms.second.field_with(name: "data[ConsultarPontuacaoCondutor][data_primeira_habilitacao]").value = params[:first_cnh_date]

    #submit the form with some error treatments
    request_return = Hash.new
    begin
      page = page.forms.second.submit
      request_return[:status] = 200
      if page.body.include?("Nao consta pontuacao para esse condutor")
        request_return[:message] = "Não consta pontuação para esse condutor."
      else
        request_return[:message] = page.body
      end
    rescue
      request_return[:message] = "Ocorreu um erro na integração com o DETRAN. Favor entrar em contato com o suporte."
      request_return[:status] = 404
    end

    render :json => request_return
  end

  private 

  def set_agent
    @agent = Mechanize.new
  end

end
