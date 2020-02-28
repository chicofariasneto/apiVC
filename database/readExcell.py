# Script para gerar os inserts em sql lindo dms, 
# isso ta bonito dms
import xlrd as xd

# excel's file name
paths = ['countCH.xlsx', 'countCH2.xlsx']
visited = []
check = 1

print("-- INSERT INSTO voiceCarbo.alimento VALUES (Nome, Medida, Kcal, Carboidratos, Peso, Grupo);")
for i in paths:
    workBook = xd.open_workbook(i)
    for j in range(workBook.nsheets):
        sheet = workBook.sheet_by_index(j)
        for x in range(sheet.nrows):
            if x == 0:
                continue
            if sheet.cell_value(x,1) == "" and sheet.cell_value(x,2) == "" \
                and sheet.cell_value(x,3) == "" and sheet.cell_value(x,4) == "":
                continue
            row = "INSERT INTO voiceCarbo.alimento VALUES ("
            for y in range(sheet.ncols):
                aux = str(sheet.cell_value(x,y))
                if "'" in aux:
                    aux = aux.replace("'","''")
                if aux == "":
                    continue
                if aux[-1] == " ":
                    aux = aux[:-1]
                if y + 1 == sheet.ncols and y != 4:
                    row = row + "'" + aux + "'"
                elif y == 0:
                    if aux.lower() in visited:
                        check = 0
                        break
                    else:
                        row = row + "'" + aux.lower() + "', "
                        visited.append(aux.lower())
                else:        
                    if y in [2,3,4]:
                        if y + 1 == sheet.ncols or sheet.cell_value(x,y+1) == "":
                            row = row + aux
                        else:
                            row = row + aux + ", "
                    else:
                        row = row + "'" + aux + "', "
            if check:
                row = row + ");"
                print(row)
            else:
                check = 1