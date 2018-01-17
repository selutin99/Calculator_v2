package com.calculator_v2;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;

public class LogariphmManager extends ReactContextBaseJavaModule{
    public LogariphmManager(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "LogariphmManager";
    }

    @ReactMethod
    public void justEval (String expr, Callback call) {
        Expression expression;
        try {
            expression = new ExpressionBuilder(expr).build();
            call.invoke(String.valueOf(expression.evaluate()));
        }
        catch (Exception e){
            call.invoke("Ошибка! Проверьте правильность введённой функции!");
        }
    }

}
