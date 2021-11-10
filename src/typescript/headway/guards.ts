type DeliminatedDocument = {
  text: string;
  separator: 'comma' | 'tab';
}

type PlaintextDocument = {
  text: string
}

const printDeliminated = (doc: DeliminatedDocument) => {

};

const printPlaintext = (doc: PlaintextDocument) => {

}

const printDocument = (doc: DeliminatedDocument | PlaintextDocument) => {
  if ('separator' in doc) {
    // кейс не работает, так как функция не знает тип передаваемого doc,
    // решается через оператор in
    printDeliminated(doc);
  } else {
    printPlaintext(doc)
  }
}

// пользовательская защита типов реализация через оператор is в возвращаемом значении
export type FinalInvoice = {
  __typename: "FinalInvoice";
}

export type DraftInvoice = {
  __typename: "DraftInvoice";
}

export type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === 'FinalInvoice'
}

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === 'DraftInvoice'
}

const invoice: Invoice = {
  __typename: 'DraftInvoice'
}
isDraftInvoice(invoice);