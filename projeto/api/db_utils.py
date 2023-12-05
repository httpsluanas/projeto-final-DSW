from django.db import connection

def createTable(tabela_nome, campos_renomeados, dados_csv):
    with connection.cursor() as cursor:
        cursor.execute(f"DROP TABLE IF EXISTS {tabela_nome}")

        sql_cria_tabela = f"""
        CREATE TABLE {tabela_nome} (
            id serial PRIMARY KEY,
            {', '.join([campo + ' VARCHAR(255)' for campo in campos_renomeados])}
        )
        """
        print("SQL Criar Tabela:", sql_cria_tabela)
        cursor.execute(sql_cria_tabela)

        sql_insere_tabela = f"""
        INSERT INTO {tabela_nome} ({', '.join(campos_renomeados)})
        VALUES ({', '.join(['%s' for _ in campos_renomeados])})
        """

        values = [[linha.get(campo, None) for campo in campos_renomeados] for linha in dados_csv]

        print("Valores a serem inseridos:", values)
        cursor.executemany(sql_insere_tabela, values)
