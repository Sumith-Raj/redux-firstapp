// A mock function to mimic making an async request for data
export function loading(input) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: input }), 2000)
    );
  }