import { ButtonCode, CalculateState, NumberCode, Operator } from "@/types/calculate";

export const isNumber = (val: ButtonCode): val is NumberCode => {
  const numRegex = /[0-9]/;
  return numRegex.test(val);
};

export const calculate = (value: ButtonCode, state: CalculateState): CalculateState => {
  if (isNumber(value)) {
    return handleNumber(value, state);
  } else {
    switch (value) {
      case "=":
        return hadleEqual(state);
      case ".":
        return handleDot(state);
      case "AC":
        return handleAllClear();
      case "%":
        return handlePercent(state);
      case "+-":
        return handleSignChange(state);
      default:
        return handleOperator(value, state);
    }
  }
};

const handleNumber = (value: NumberCode, state: CalculateState): CalculateState => {
  const isCurrentZero = state.current === "0";
  const isDoubleZero = value === "00";
  // valueが"00"の例外処理
  if (isDoubleZero && (isCurrentZero || state.current === `${state.operand}` || state.isNextClear)) {
    return {
      ...state,
      current: "0",
    };
  }

  return {
    // currentが0 or state.isNextClear(operator押下)の時はvalueを返す
    current: isCurrentZero || state.isNextClear ? value : state.current + value,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
};

const handleOperator = (value: Operator, state: CalculateState): CalculateState => {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: value,
      isNextClear: true,
    };
  }

  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: value,
    isNextClear: true,
  };
};

const handleSignChange = (state: CalculateState): CalculateState => {
  const current = parseFloat(state.current);
  return {
    current: `${-current}`,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
};

const handlePercent = (state: CalculateState): CalculateState => {
  const current = parseFloat(state.current);

  return {
    current: `${current / 100}`,
    operand: state.operand,
    operator: state.operator,
    isNextClear: true,
  };
};

const handleDot = (state: CalculateState): CalculateState => {
  if (state.current.indexOf(".") !== -1) {
    return state;
  }

  return {
    current: state.current + ".",
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
};

// "C"で今のstateをクリアする
// const handleClear = (state: CalculateState): CalculateState => {
//   return {
//     current: '0',
//     operand: state.operand,
//     operator: state.operator, // ここはnullかも?
//     isNextClear: false,
//   };
// };

const handleAllClear = (): CalculateState => {
  return {
    current: "0",
    operand: 0,
    operator: null,
    isNextClear: false,
  };
};

// "D"で1文字削除(既に1文字なら0にする)
// const handleDelete = (state: CalculateState): CalculateState => {
//   return {
//     current:
//       state.current.length === 1
//         ? '0'
//         : state.current.substring(0, state.current.length - 1),
//     operand: state.operand,
//     operator: state.operator,
//     isNextClear: false,
//   };
// };

const hadleEqual = (state: CalculateState): CalculateState => {
  if (state.operator === null) {
    return state;
  }

  const nextValue = operate(state);
  return {
    current: `${nextValue}`,
    operand: 0,
    operator: null,
    isNextClear: true,
  };
};

const operate = (state: CalculateState): number => {
  const current = parseFloat(state.current);

  switch (state.operator) {
    case "+":
      return state.operand + current;
    case "-":
      return state.operand - current;
    case "×":
      return state.operand * current;
    case "÷":
      return state.operand / current;
    default:
      break;
  }

  return current;
};
