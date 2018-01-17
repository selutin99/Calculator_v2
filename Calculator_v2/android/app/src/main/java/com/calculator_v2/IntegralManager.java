package com.calculator_v2;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;

public class IntegralManager extends ReactContextBaseJavaModule{
    private Expression expression;
    public IntegralManager(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "IntegralManager";
    }

    @ReactMethod
    public void justEval (String expr, String a, String b, Callback call) {
        Double up;
        Double down;

        double n = 100;
        try {
            up = Double.valueOf(b);
            down = Double.valueOf(a);
            expression = new ExpressionBuilder(expr).variables("x").build();
            double h = (up - down) / n;
            double sum = 0;
            for (int i = 0; i < n; i++) {
                sum += f(down + (i + 0.5) * h);
            }
            double result = sum * h;
            call.invoke(String.valueOf(result));
        }
        catch(Exception e){

            call.invoke("Ошибка! Проверьте правильность введённой функции и границ интегрирования!");
        }
    }

    @ReactMethod
    public double f(double x) {
        try {
            return expression.setVariable("x", x).evaluate();
        } catch (Exception e) {

            return 0;
        }
    }

}
