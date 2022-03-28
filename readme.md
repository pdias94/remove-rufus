# Script para atualizar os dados de termos de uso de consumidores

# Parametros .ENV
- TERM_ID: Deve possuri o valor do termo de uso a ser associado ao consumidor. Esse valor é encontrado no contentful olhando para o ultimo termo de uso criado na entidade legalAgreements qual esteja disponível em PRD, a informação está no campo ENTRY ID

# Passos
- Lista todos os consumidores da base de dados
- Associa esses consumidores ao termo de uso do aplicativo
- Atualiza em lote a tabela do dynamoDB

# Feature Flag
- legal_agreements: Feature que habilita a visualização do novo termo de uso e nova politica de privacidade no app.
- notify_legal_agreements: Feature que controla quando o modal de novo termo de uso disponível deve aparecer no app.


