package com.calculator_v2.ast;


public interface Operation {
	Double getNumericResult(Double val);
	Operation getDerivative();
}
